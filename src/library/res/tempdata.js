const ferment = [
  {
    id: '1990',
    fermentName: 'Smoked Wheat Shoyu',
    fermentType: 'Amino Sauce',
    date: new Date(),
    ingredients: [{nameIngredient: 'Soja', quantity: '500g'}],
    steps: [
      {
        nameStep: 'Koji incubation',
        durationStep: 48,
        tempStep: [28, 30],
        controlSimpleStep: ['Mix'],
        commentStep: '',
      },
      {
        nameStep: 'First fermentation',
        durationStep: 168,
        tempStep: [20, 26],
        controlSimpleStep: ['Mix'],
        commentStep: 'You gotta check this everyday mate',
      },
    ],
  },
  {
    id: '1991',
    fermentName: 'Miso',
    fermentType: 'Amino Paste',
    date: new Date(),
    ingredients: [{nameIngredient: 'Soja', quantity: '500g'}],
    steps: [
      {
        nameStep: 'Koji incubation',
        durationStep: 48,
        tempStep: [28, 30],
        controlSimpleStep: ['Mix'],
        commentStep: '',
      },
      {
        nameStep: 'First fermentation',
        durationStep: 168,
        tempStep: [20, 26],
        controlSimpleStep: ['Mix'],
        commentStep: 'You gotta check this everyday mate',
      },
    ],
  },
];

export default ferment;
