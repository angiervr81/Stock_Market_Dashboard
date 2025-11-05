# Web Development Project 6 - *Stock Market Dashboard*

Submitted by: **Angie Rivera**

This web app: **This web app: displays stock market data in a user friendly dashoard, allowing users to search, filter, and analyze stocks with a summary statistics.**

Time spent: **5** hours spent in total

## Required Features
# PART 2: 
The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset
    
The following **optional** features are implemented:

- [X] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [X] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

# PART 1: Completed 10/28/25
The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *insert details here*
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [X] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] The user can click on a topic and get infomation related to the topic they chose

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./WK7_Project6 _Dashboard_PT2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Rescoures
API Scoure: 
- [MarkterStack](https://marketstack.com/)  for data fetching 
Design & Styling:
- [Hero Patterns](https://heropatterns.com/) for Background use
    
## Development Tools
- React — UI library for building reusable components
- Vite — Build tool for faster React setup
- VS Code — Code editor used

## Notes

Challenges and key implementation details:

* Fetching data from multiple APIs and ensuring it updates dynamically.
* Styling the dashboard with a cohesive color palette and modern, responsive design.
* Creating a dropdown/hamburger navigation menu and handling responsive behavior.
* Ensuring stock price changes dynamically update colors to reflect gains or losses.
* Implementing accurate summary statistics that respond correctly to filtered data.


 Coming Soon: 

 - Adding logos for each company 
 - Adding more details for each company
 - Style update

## License

    Copyright [2025] [Angie Rivera]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
