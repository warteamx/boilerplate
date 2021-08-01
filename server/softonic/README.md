# Softonic Software Engineer Technical Assignment (backend)

We provide information about programs to several services through our Catalog API ecosystem.

The core information about programs can be found in the "Programs API" and the information about the authors can be found
in the "Developers API", these are 2 different APIs provided by a 3rd party.

Each API returns the information with a specific format, that can be found in the [source-api-outputs folder](./source-api-outputs).

Write a NodeJS API service named **Softonic API** (in the folder `softonic-api`) exposing the following endpoints:

* One that returns the following format given a **program id**:

```json
{
  "id": "21824",
  "author_info": {
    "name": "AresGalaxy",
    "url": "https://aresgalaxy.io/"
  },
  "title": "Ares",
  "version": "2.4.0",
  "url": "http://ares.en.softonic.com",
  "short_description": "Fast and unlimited P2P file sharing",
  "license": "Free (GPL)",
  "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/21000/21824/ares-14-100x100.png",
  "rating": 8,
  "total_downloads": "4741260",
  "compatible": "Windows 2000|Windows XP|Windows Vista|Windows 7|Windows 8"
}
```

* And another endpoint that returns a **collection of programs**:

```json
[
  {
    "id": "21824",
    "author_info": {
      "name": "AresGalaxy",
      "url": "https://aresgalaxy.io/"
    },
    "title": "Ares",
    "version": "2.4.0",
    ...
  },
  ...
]
```

Pay attention to the returned structure!

In the next schema you can see where the **Softonic API** needs to be, and an example of the typical application flow.

```comic
    .--------------.     .----------------.    
    | Programs API |     | Developers API |   
    '--------------'     '----------------'
          |    ^            ^     |
       [3]|     \ [2]      /[2]   |[3]
          |      |        |       |
          |   .==============.    |  
          ·-->| Softonic API |<---·
              '=============='
                [1]^   | [4]
                   |   v
                .-,(  ),-.    
             .-(          )-.                                       
           (      USER       ) 
            '-(          ).-'
               '-.( ).-'      
```

## Considerations

- The focus here should be on design. We are less interested in seeing that this works than in seeing how you approach the problem (keep in mind algorithmic complexity, scalability, error treatment ...).
- You can use any libraries/frameworks that you need, but keep in mind the position you're applying to.
- Please provide at least some unit tests (it is not required to write them for every component).
- We plan to add more information from a third API soon.
- In the future, we want to also serve the app information in a command line application (you don't need to implement this, just keep it mind in your design).
- Please provide a short summary in the `SUMMARY.md` file, detailing anything you think is relevant:
  - Installation steps
  - How to run your code / tests
  - Where to find your code and how it is structured
  - Was it your first time writing a unit test, using a particular framework? How did you approach testing?
  - What would you do to improve the performance/scalability/resilience?
  - What would you have done differently if you had had more time? Why?

Please send us a **git bundle** with your code, you can create it with:

```bash
cd softonic-api
git bundle create softonic-api.bundle --all
```
