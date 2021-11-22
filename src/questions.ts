import { Question } from "./question";

export const questions: Question[] = [
  {
    id: "1",
    title: "ABCD",
    group: "dummy",
    description: "Some really new concept",
    list: [
      { title: "Pattern 1", description: "This is the first case" },
      { title: "Pattern 2", description: "This is the second case" },
    ],
    links: ["www.example.com"],
  },
  {
    id: "2",
    title: "ergwergb sergs rtwer wetwer",
    group: "dummy",
    description:
      "werert wertwer vwerv tery ertser awe etyu tyuk dg ser awerrv cd",
  },
  {
    id: "3",
    title: "GRASP patterns",
    group: "GRASP patterns",
    description: `The Domain Model illustrates conceptual classes of the real - world domain; the Design Model illustrates software classes. \n
      Composite aggregates Part, Container contains Content, and Recorder records. \n
      The GRASP principles will let you understand the rationale behind the GoF design patterns. \n
      There are nine GRASP patterns:`,
    list: [
      {
        title: "Information expert",
        description:
          "if you have an operation to do, and this operations needs inputs, then you should consider putting the responsibility of carrying out this operation in the class that contains the inputs for it.",
      },
      {
        title: "Creator",
        description: `gives guidelines as to which class B should be in charge of creating a certain type of objects A. 
        B contains or aggregates instances of A
        B closely uses A
        B has the inputs to construct A
        This goes a further than Information expert: it’s not just about having the input of the operation of construction, it’s about being “close” to the operation.`,
      },
      {
        title: "Low coupling",
        description:
          "Coupling is a measure of how strongly one element is connected to, has knowledge of, or relies on other elements. Coupling happens between two parts of the code when one depends on the other",
      },
      {
        title: "High cohesion",
        description: `The principle of High cohesion encourages to focus classes around one responsibility, and to have all its components oriented towards achieving this responsibility. 
      This is the principle of “do one thing and do it well”. 
      The principle of high cohesion also applies to other elements of the code, such as functions, and also modules and systems. 
      This ties back well with the idea of having a well-organized code: a highly cohesive component lets you label it in your mind with “this is the part of the code that does X”. 
      This allows better mental abstractions as well as code abstractions. 
      is a measure of how strongly related and focused the responsibilities of an element are`,
      },
      {
        title: "Polymorphism",
        description: `is often seen as having a base class with virtual methods that defines an interface, and derived classes implementing this interface, but this is only one type of polymorphism. 
      There are plenty of types of polymorphism (including templates for example). 
      The usage for polymorsphism is when there are several ways to accomplish a task, and you want to decouple the clients of this task from the various pieces of code that implement the various ways to perform it. 
      The Polymorphism principle is very close to the GoF Strategy pattern, if not identical. 
      It contributes to the Low Coupling principle.`,
      },
      {
        title: "Pure fabrication",
        description: `It is natural to represent in our code objects that map the reality of the domain that we’re trying to model. 
      For example, if you’re working on a financial application, you can probably expect to encounter some classes called Transaction or Portfolio in the code. 
      But sometimes you have a responsibility to assign, and it seems to not fit well in any domain class. 
      And according to the principle of High cohesion above, you shouldn’t force a responsibility into a class that is already doing something else. 
      That’s when the principle of Pure fabrication comes into play: create a class that does not map to a domain object, and let it achieve this new responsibility in a cohesive way.`,
      },
      {
        title: "Controller",
        description: `Here is an example of a pure fabrication: a UI Controller. 
        Personal opinion: I would have kept this as an example of pure fabrication and not made a principle out of it.
         The controller is the first non-UI component that receives the UI event and organizes the operations to react to this event. 
         Indeed, that doesn’t map to any domain object, even if the UI itself can display domain concepts. 
         There are also other examples of pure fabrications in the GoF design patterns: for example, a Facade object is a pure fabrication.`,
      },
      {
        title: "Indirection",
        description: `is another way to reduce coupling by creating an intermediary class (or any kind of component) between two classes A and B. 
        This way, the changes in each one of A and B don’t affect the other one. 
        The intermediary class absorbs the impact by adapting its code rather than A or B (or more other classes). 
        This relates a lot to the Adapter design pattern, even though the Adapter design pattern is rather made to connect two existing incompatible interfaces. 
        But it also has the effect of protecting each one against the changes of the other. 
        Indirection looks a bit like Protected variations, as they both introduce a layer between components in order to reduce coupling. 
        According to my understanding, the difference between Protected variations and Indirection is that Protected variations is about designing interfaces in the existing components, whereas Indirection is about introducing a new component in the middle.`,
      },
      {
        title: "Protected variations",
        description: `is related to the one of Low coupling, because it helps reducing the impacts of the changes of the code of one part A on another part B. 
        The code of part B is protected against the variations of the code of part A, hence the name of the pattern. 
       How do you achieve such a protection? By organizing the responsibilities around stable interfaces. 
       This is particularly relevant for code that tends to change often. `,
      },
    ],
    links: [
      "https://www.wisdomjobs.com/e-university/uml-tutorial-175/applying-grasp-to-object-design-13379.html",
    ],
  },
  {
    id: "4.1",
    title: "Tools created to control/ improve code quality",
    group: "Code quality",
    description: "",
  },
  {
    id: "4.2",
    title: "Cyclomatic complexity and why it's important",
    group: "Code quality",
    description: "",
  },
  {
    id: "5.1",
    title: "TDD and BDD, its difference, and use-cases",
    group: "Testing / Unit testing",
    description: "",
  },
  {
    id: "5.2",
    title:
      "Different types of tests (black-box, API, integration and etc., and difference between them); ",
    group: "Testing / Unit testing",
    description: "",
  },
  {
    id: "5.3",
    title: "Mock vs stub difference",
    group: "Testing / Unit testing",
    description: "",
  },
];
