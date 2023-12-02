# 311 Customer Service Mobile (Android/IOS)
![headerImage]

---
## Synopsis
**City of Sacramento's 311 mobile service** developed on React Native using the Expo framework. This repository pertains to the Senior Project for team **Stack 8** in accordance with courses **CSC 190 and CSC 191** at *California State University, Sacramento* (Fall 2023 - Spring 2024).

[City of Sacramento's 311 Customer Services][link] include non-emergency telephone and web services which receive thousands of **non-emergency service requests** everyday from city residents, visitors, and businesses in accordance to existing addresses within the county. The legacy 311 mobile app employs City of Sacramento's 311 responsive web page embedded into a mobile view. This project aims to **migrate the existing services** to a single code base for centralized deployments to **both AndroidOS and IOS.**

To achieve this, the project leverages the **React Native** framework, a popular open-source framework that enables efficient **development of cross-platform mobile applications using JavaScript and React.** The massive number of requests the project must handle and the need for accordance with valid addresses calls for the employment of several geolocation and geocoding services through the **Google Maps API,** a set of programming interfaces that enables developers to embed maps and find addresses, among other location-related functionalities. The app will integrate with City of Sacramento's existing **Salesforce** instance, a **cloud-based customer relationship management (CRM) platform** that offers a suite of tools and services to help manage customer service operations and data, effectively serving as the database for this project. Lastly, for the ease of development and deployment the project utilizes **Expo,** a framework built on top of React Native that provides a set of libraries and tools allowing developers to create and deploy mobile apps for **IOS and Android** without the need for extensive native code. 

---
## Team Stack 8
**Stack 8** consists of nine computer science majors in our final year of studies. We possess a solid foundation in various programming languages and software paradigms. As a team, we share a **commitment to teamwork, adaptability, and problem-solving.** Stack 8 includes the following members:

- Ranjot Dharni
- Brennan Moran
- Sean Russel Agarrado
- Jeffrey Bianucci
- Nicolas Baturin
- Connor Dominik
- David Chernyy
- Jalen Scrivner
- Jeremy Smart

---
## Deliverables Report
The overarching project flow is organized into one academic year split across **two periods, each consisting of 4 sprints,** totaling an **8 sprint run**. The first 4 sprints span the length of Fall 2023, and the last 4 throughout Spring 2024. Below are screenshots of some of the **latest iterations of the front-end implemenation** using React Native and Google Maps on the Expo framework:

Splash Screen              |  Home Screen              |  Map Screen               |  New Request Screen
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![splashImage]             | ![homeImage]              | ![mapImage]               |  ![selectImage]

---
## Salesforce Integration
**Salesforce CRM** provides an expansive list of **built-in, standard objects** for storing data within an instance. However, for flexibility considerations, Salesforce **allows users to define and store custom objects as well** for storing data in a specified format. City of Sacramento's existing Salesforce instance employs a combination of custom and standard Salesforce objects, the relational mapping for which consists of a complex web of connections. This would be difficult to represent diagrammatically in its entirety, however for the purposes of demonstration, we can use the Salesforce standard objects to design a potential **Entity Relationship Diagram (ERD)** that represent a subset of services, such as our **311 mobile app service.** This ERD may look something like the following:

![ERD]

<span style="font-size: 0.75rem">*This mock-up is a precursor representation and is subject to change based on new requirements or data*</span>

---
## Milestone Timeline**
- [ ] <span style="font-size: 1.25rem">**Resources Section**</span>
    1. Implement **consistent, scalable design** for loading and displaying a constantly updated **list of user resources**
    1. Create **centralized view** for users to find and read articles, statements, or documents related to City of Sacramento's non-emergency services
    1. Allow users to **search, sort, or filter resource data** to find a specific article, statement, or document
    1. Integrate front-end with City of Sacramento's existing **AWS Elastic Search** instance to enable users to find specific resources efficiently

- [ ] <span style="font-size: 1.25rem">**Google Maps API**</span>
    1. Flesh out interactivity of the current **embedded map**
    1. Allow users to **search, sort, or filter location data** to find a specific address
    1. Integrate map view with **exisiting, geocoded requests** in City of Sacramento's database instance

- [ ] <span style="font-size: 1.25rem">**SalesForce Integration**</span>
    1. Integrate **existing service request data** from City of Sacramento's database instance
    1. Configure front-end to **transform requests to the proper format** for storage

- [ ] <span style="font-size: 1.25rem">**Authentication**</span>
    1. Enable user profile creation and login-in
    1. Configure **Azure B2C** authentication protocol
    1. Integrate authentication with **existing user profile data**

- [ ] <span style="font-size: 1.25rem">**Modifiable Request Formats**</span>
    1. Enable City of Sacramento to **modify format** of incoming requests **without the need for app redeployment**
    1. Leverage Salesforce object for storing format of a request, then modify this object on update to request format
    1. Engage in **constant, consistent communication** with City of Sacramento's back-end team to **ensure proper allocation of the resources required** to implement this feature

<span style="font-size: 0.75rem">**CSC 191*</span>
<span style="font-size: 0.75rem">***Based on summary of JIRA backlog*</span>

---
## Testing*
<span style="font-size: 0.75rem">**To-do in CSC 191*</span>

---
## Deployment*
<span style="font-size: 0.75rem">**To-do in CSC 191*</span>

---
## Developer Instructions*
<span style="font-size: 0.75rem">**To-do in CSC 191*</span>

[headerImage]: /resources/Readme_Header.png
[splashImage]: /resources/splashScreen.jpg
[homeImage]: /resources/homeScreen.jpg
[mapImage]: /resources/mapScreen.jpg
[selectImage]: /resources/selectScreen.jpg
[ERD]: /resources/standardObjectErd.png
[link]: https://311.cityofsacramento.org/s/