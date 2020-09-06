# LightFeather.io - Full Stack Kanban Challenge
#
#

---
#
## Specifications
#

* Readme, Docker, Backend, Frontend

##### Assumptions to clarify
1. server specification for simple memory store, no db, **assuming no WSGI/NGINX/multi-process for API**
2. server specification describes updating the state, but not the encoded file, **verify this conclusion?**
3. server specifications describe a maximum, not a minimum value, **assuming minimum is ascii 0**
4. putting everything in one repo, but typically I like to manage backend, frontend, documentation in separate repos.
5. figma mock looks well proportioned / centered, **does the client want it a single column?**
#
#

##### Confusion
1. Figma mock describes a "4px border" at the bottom of the header, but it looks like a margin?

---
#
## Design
#

##### Initial Thoughts

* Python Backend (~~nginx WSGI load balancing~~ (would require db/memstore)
* React Frontend
* Nginx load balance / reverse proxy?

###### Backend Design

* Entry point - app.py

###### Frontend Design

* 
