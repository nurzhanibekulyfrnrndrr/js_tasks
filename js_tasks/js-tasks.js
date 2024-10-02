//Преобразовать данные из https://jsonplaceholder.typicode.com/users к виду чтобы укаждого пользователя отобразить только id и username

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
    const data = await response.json();
  
    const users = data.map(user => ({
      id: user.id,
      username: user.username,
      email:user.email
    }));

    //Вывести первых 5 пользователей
    const firsFiveUs = data.slice(0,5);
    console.log('Первые 5 юзеры: ',firsFiveUs);

    //Вывести всех пользователей в обратном порядке
    const reverseUsers = data.slice().reverse();
    console.log('Юзеры в обратном порядке: ',reverseUsers);

    //Посчитать сколько всего пользователей
    const countOfUsers = data.length;
    console.log("Количество юзеров: ",countOfUsers);


    //Вывести список вебсайтов пользователей которые содержат '.com'
    const websitesWithCom = data   
    .filter(user => user.website.includes('.com')) 
    .map(user => user.website); 

    console.log('вебсайты которые содержат .com: ',websitesWithCom);


    //Вывести все username которые длиннее 12 символов
    const bigUserName = data
    .filter(user =>user.username.length>12)
    .map(user => user.username);
    
    console.log('big юзернеймы: ',bigUserName);

    //Привести список всех username где каждый будет в нижнем регистре
    const lowerCaseUsernames = data.map(user => user.username.toLowerCase());

    console.log("Юзеры нижынм регситром)): ",lowerCaseUsernames);


    //Вывести всех пользователей из города 'Lebsackbury'

    const userFromLebsackbury = data.filter(user=>user.address.city === "Lebsackbury")
    if(userFromLebsackbury){
        console.log('Юзер с города: ',userFromLebsackbury);
    }
    else{
        console.log('Юзер с такого города нету ');
    }


    //Вывести пользователя с id === 9
    const userId9 = data.find(user=>user.id===9)
    if (userId9) {
        console.log('Юзер с id 9:', userId9);
      } else {
        console.log('Юзер с id 9 не найден.');
      }


 
    //Получить из данных выше список всех эмейлов  
    const email = data.map(user=>({
        email:user.email,

    }));

    console.log("Почты этих юзеров: ",email);


    console.log(users);
    
  }
  
  getUser().catch(error => {
    console.log('Ошибка:', error);
  });
  