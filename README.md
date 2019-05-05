# haizzz.github.io
Personal website

## How to add blog

1. Create a new file under `/blog/_posts/`
Create file with name formated as `YYYY-MM-DD-POST NAME HERE`

2. Add front matter
Add to the top of the new post:
```
---
layout: post
title: POST NAME HERE
---
```

3. Make jekyll build the new post
Run the following command
```shell
$ jekyll build
```