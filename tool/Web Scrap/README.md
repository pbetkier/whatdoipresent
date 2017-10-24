# Web Scrap using Beautiful Soup

Python scripts to scrap the sites of QConf and Devoxx. There are two seperate scripts since the DOM construct is different for each.

## Dependencies

```
Python (>=2.7) 
Pip (>=9.0.1)
Beautiful Soup (>=4.4)
```

## Build Setup

``` bash
# install  python
$ brew install python

# install pip
$ curl -O http://python-distribute.org/distribute_setup.py
$ python distribute_setup.py
$ curl -O https://raw.github.com/pypa/pip/master/contrib/get-pip.py
$ python get-pip.py

# install BeautifulSoup
pip install beautifulsoup4

# Run the script
python qconn_extract.py
```

## Modifying the script

Variables to be modified
- <b>confName</b> : Name of the conference (Example : QCon, London 2015)
- <b>fileName</b> : Name of the file which will have the JSON output (Example : qcon-lon-15.json )
- <b>baseUrl</b>  : Base URL of the QConn page (Example : https://qconlondon.com/london-2015/ )
- <b>homeUrl</b>  : Relative URL of the page where the schedules are tabulated (Example : "schedule.html#day-5)
- <b>pageUrl</b>  : This is different for different years. Make sure, the Page URL is correctly derived from the a tag. If not modify it accordingly 