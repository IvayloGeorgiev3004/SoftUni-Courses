let animals = {
    'Cow': 'Moo',
    'Cat': 'Meow',
    'Dog': 'Bark'
  };
  let test = "Dog"
  let test2 = "Cow"
  
  delete animals.Cow;
  delete animals[test];
  
  console.log(animals);