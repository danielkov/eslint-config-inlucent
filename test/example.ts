function sum(a: number, b: number) {
  if (a && b) {
    return a + b;
  }
  return 0;
}

sum(1, 2);

type Model = {
  name: string;
  credits: number;
};

function greeter(model: Model) {
  return `My name is ${model.name}. My private price is ${
    model.credits
  } Credit${model.credits > 1 ? "s" : ""}.`;
}

greeter({ name: "TypeError", credits: 1.99 });
