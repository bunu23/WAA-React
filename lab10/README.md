Write a React application with 4 pages:

Page 1:
You can enter
 Firstname (text input control)
 Lastname (text input control)
 Profession (which is a select input control with the values Programmer, Manager, Tester,
Architect)
Then this page has a Next button that routes to Page 2

Page 2:
The page shows the entered data from page 1
You can enter
 street (text input control)
 City (text input control)
 Zip (text input control)
 State (which is a select input control with the values Iowa and California)
Then this page has a Next button that routes to Page 3

Page 3:
The page shows the entered data from page 1 and page 2
You can enter
 Creditcard number (text input control)
 type (which is a radio button control with the values Visa and Mastercard)
Then this page has a Next button that routes to Page 4

Page 4:
The page shows the entered data from page 1 and page 2 and page 3
Before you can use the BrowserRouter you need to install the router library first with the command:

npm install react-router-dom
npm start
