# Git change log with bootstrap

----
## Synopsis

> Export your git commits, messages, dates, author, special ids, tags-> which I used for version control, file changes into a json file. Then view your data in a bootstrap table. The filter function allows you filter through all the data if you are looking for a specific item.

----
## Uses
1. Html
2. jQuery
3. javascript
4. json
5. git  --pretty format
6. bootstrap

----
## Step 1:

**In your terminal**

* git add * or git add -A
* git commit -m " APPLICATION TYPE ; ISSUE ID; MESSAGE"
* git push

**If you want to add a verison tag or number**

* git tag -a v1.4 -m "<message>"


>*It's important to note that the ; seperates the string. In the index.html file I split the string, so each index can be used in different columns. It's probably best that you commit the message with three colons, or I would just remove it if you don't have a use for it. 

----
## Step 2:
**In your terminal run**

    function getcommit { 
        \ git show --pretty="format:"
        --name-only $1 | \
        perl -pe's/^\n//g;' | \
        sed 's/\(.*\)/"\1"/g' | \
        perl -0pe 's/\n(?!\Z)/,\n/g'; \    
    }     

    export -f getcommit

---
**Then run the below to create json**

    git log --pretty=format:'{
        %n  "commit": "%h",%n  "author": "%ae",
        %n  "date": "%ct",%n "version": "%D", %n  
        "message": "%f",%n  "files": [ COMMIT_HASH_%H  ]%n,'|\
        }
        perl -pe 'BEGIN{print "{\n\"logs\":\n["}; END{print "]}\n"}'
        | \perl -pe 's/},]/}]/;s/COMMIT_HASH_(\w+)/`echo -n  "";getcommit $1`/e' > changeLog/changeLog.json

    }     

---

![alt text](https://github.com/klsweat/markdown-here/GIT_CHANGE_LOG_W-BOOTSTRAP/example.png"Logo Title Text 1")
