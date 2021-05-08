import requests
from html.parser import HTMLParser
import os


class MyHtmlParser(HTMLParser):
    def __init__(self, *args, **kwargs): 
      super(MyHtmlParser, self).__init__(*args, **kwargs)
      self.title = ""
      self.hasTitle = False
      self.links = []

    def handle_starttag(self, tag, attrs):
        if (tag == 'h1' or tag == "title") and self.title == "": 
            # print("Set title")
            self.hasTitle = True
        if tag == 'a': 
            # print("Encountered a start tag:", tag, attrs[0][1])
            self.links.append(attrs[0][1])
  
    def handle_data(self, data):
        if self.hasTitle:
            # print("Encountered some data  :", data)
            self.hasTitle = False
            self.title = data
      


def front_matter(title, pos): 
  return """---
title: {title}
sidebar_position: {pos}
---
""".format(title = title, pos = pos)

def category_json(title, pos):
  return """
{{
  "label": "{title}",
  "position": {position}
}}
  """.format(title = title, position = pos)

def set_content(content): 
    return "<div dangerouslySetInnerHTML={{__html: `<div>" + content + "</div>`}}></div>"


URL = 'http://shakespeare.mit.edu/'
DIR = "docs/"

try: 
  os.mkdir(DIR)
except: 
  print("")

# Get list of plays
r = requests.get(URL)
data = r.text

print(data)


main_parser = MyHtmlParser()
main_parser.feed(data)

links = main_parser.links

print ("Found: " + str(len(links)) + " links")

# For every play get the chapter
position = 1
for link in links: 
  req_uri = URL + link
  print('Get: ', req_uri)
  try: 
    content_request = requests.get(req_uri)
  except: 
    print ("Failed: ", link)
    continue
  content = content_request.text
  
  child_page_parser = MyHtmlParser()
  child_page_parser.feed(content)

  path = DIR + child_page_parser.title.replace(" ", "-").replace("'", "").replace(":", "").replace("\n", "") + "/"
  try: 
    os.mkdir(path)
  except: 
    print(path + " error")

  content_links = child_page_parser.links
  print("Title: ", child_page_parser.title)
  print("Position: ", position)

  # TODO: Make edge case for when page has zero links, then write content direct to file

  # For every chapter get the content
  side_bar_pos = 0
  for content_link in content_links: 
    if req_uri.endswith("sonnets.html"): 
      final_url = req_uri.replace("sonnets.html", "") + content_link
    else: 
      final_url = req_uri.replace("index.html", "") + content_link
    print("Get: ", final_url)
    final_request = requests.get(final_url)
    final_content = final_request.text
    final_parser = MyHtmlParser()
    final_parser.feed(final_content)
    
    # Write content to file
    if (content_link.endswith(".html")):
      print("Writing: " + content_link)
      try:
        f = open(path + content_link.replace(".html", ".md"), 'w')
        f.write(front_matter(final_parser.title.replace("\n", "").replace(":", ""), side_bar_pos) + set_content(final_content))
        json_file = open(path + "_category.json", "w")
        json_file.write(category_json(child_page_parser.title.replace("\n", ""), position))
      except: 
        print("")
      side_bar_pos += 1
        
  position += 1
    

  

print("Done.")