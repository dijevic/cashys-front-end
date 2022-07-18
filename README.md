<h1 color="red" align="center"> WELCOME TO CASHYS 😎😎💱 💸</h1>

<h3 color="red" align="center">A React app to keep on track my debts and incomes </h3>

 <br/>

**The main idea of the project was to create a complete MERN stack development to deal with incomes and debts , having a balance of them and be able to do a CRUD of operations(debts and incomes) and categories**

The project has been done with _React_ & _zustand(global state)_ , _React Router v6_ , _Styled components_ and _react-toastify_

To deal with the global state I am using **zustand** which is less weight than **React-Redux & Redux** , and really easy to setup and use.
For the App routing and using React-router v6 which is the latest known version of React-Router.

For the styles I decided to cope with them using **Styled components**(and no regrets are coming to me, this is for me the best way to style components while possible) and the beauty and easy-use **react-toastify** to work with the notifications and messages.

Overall I tried to be as atomic as possible with my components, always trying to keep the components simples and easy to read.

**To start with this project in local**

_First step :_

- copy and paste the follow in you cd:

```
 https://github.com/dijevic/cashys-front-end.git
```

_Second step :_

- navigate to the folder:

```
 cd cashys-front-end

```

_open the folder in your favorite IDE:_

```
 code .
```

_Install all the dependencies :_

```
 npm install
```

_Create a .env.development file:_

- add the following enviroment var for the API local URL :

```
REACT_APP_API_URL=http://localhost:4000/api/v1
```

NOTE : the *PORT* number has to be the same you has setted on the backend .

_run the project:_

```

 npm start
```

<p align="center">Then you have two ways to use the backend and integrate it with this front-end</p>

- clone the Backend , follow the backend instructions and run it up :

[cashys backend](https://github.com/dijevic/Cashys)
<b>(Steps and instructions to use the backend are in the link)</b>

<p>You can also change the enviroment  to use the backend that is alive with railway and clever cloud(DB) </p>

- Change the API url in the enviroments(development enviroment) for:

```
REACT_APP_API_URL=https://cashys-production.up.railway.app/api/v1

```

_You can also see the app alive here :_

<a href="https://cashys.netlify.app/" target="_blank">Go to cashys</a>

- User to Log into the app :+1:

```
**Email**    : dijevic.developer@gmail.com
**password** : 123456
```
![GoodJobGIF](https://user-images.githubusercontent.com/66389456/179578383-137e21ed-646e-4126-9de7-bf3c1a6ffafc.gif)

<p> And finally there you go !</p>

