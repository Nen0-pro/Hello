 let dogs =[
    {
      name: 'Aron',
      breed: 'Golden Retriever',
      hair: 'Medium',
      size: 'Large',
      age: 1,
      color: 'Golden'
    },
    {
      name: 'Jack',
      breed: 'Fox terrier',
      hair: 'Short',
      size: 'Medium',
      age: 10,
      color: 'White-brown'
    },
    {
      name: 'Hector',
      breed: 'Dogo Argentino',
      hair: 'Short',
      size: 'Extra large',
      age: 1,
      color: 'White'
    },
    {
      name: 'Alfa',
      breed: 'Great Dane',
      hair: 'Short',
      size: 'Extra large',
      age: 5,
      color: 'Gray'
    },
    {
      name: 'Bono',
      breed: 'French bulldog',
      hair: 'Short',
      size: 'Small',
      age: 6,
      color: 'Black'
    }
  ];

  let table = document.getElementById('table');
  let button = document.getElementById('btn');


function addDog(){
  for (i = 0; i <dogs.length; i++) {
      let dogAge = dogs[i].age;
      let puppy = dogAge <= 1 ? "puppy" : dogAge;
      table.innerHTML += 
      `<tr>
      <td>${dogs[i].name}</td>
      <td>${dogs[i].breed}</td>
      <td>${dogs[i].hair}</td> 
      <td>${dogs[i].size}</td>
      <td>${puppy}</td>
      <td>${dogs[i].color}</td>
      </tr>`
  }
};


  button.addEventListener('click', function(){
      fetch('https://api.myjson.com/bins/1fmzkq')
      .then(response => {return response.json();
    })
      .then(dogs => {
          table.innerHTML = "";
          addDog(dogs);

      })      
  })


