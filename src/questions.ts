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
    title: "Some meaningless text here",
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
    title: "Tools to control/ improve code quality",
    group: "Code quality",
    description: "",
  },
  {
    id: "4.2",
    title: "Cyclomatic complexity",
    group: "Code quality",
    description: `Cyclomatic complexity (CYC) is a software metric used to determine the complexity of a program. 
    It is a count of the number of decisions in the source code. 
    The higher the count, the more complex the code.`,
    list: [
      {
        title: "why it's important",
        description: `1) Limit code complexity; 2) Determine the number of test cases required`,
      },
      {
        title: "how to calculate CYC",
        description: `CYC = E – N + 2P

  (E = Number of edges (transfers of control); 
  N = Number of nodes (sequential group of statements containing only one transfer of control);
  This translates to the number of decisions + 1;
  P = Number of disconnected parts of the flow graph (e.g. a calling program and a subroutine))
  
  Binary decisions — such as “if” and “while” statements — add 1 to complexity.
  
  Boolean operators can add either one or nothing to complexity. For instance, one may be added if a Boolean operator is found within a conditional statement.
    
  void foo(void)
  {
      if (a)
          if (b) 
              x=1;
      else
          x=2;
   }
  So, CYC = 3 in this example. 
  `,
      },
    ],
  },
  {
    id: "5.1",
    title: "TDD / BDD",
    group: "Testing / Unit testing",
    description: ``,
    list: [
      {
        title: "Test-Driven Development (TDD)",
        description: `a testing methodology or a programming practice implemented from a developer’s perspective. 
  This technique starts by designing and writing test cases for every small functionality of an application. 
  The main intention of this technique is to modify or write a fresh code only when the test fails. 
  In a TDD approach, automated test scripts are written before functional pieces of code. The TDD methodology involves the following steps:
  1) Write a Failing Test - 2) Execute All Existing Tests - 3) Write Production Code to Make the Test Pass - 4) Refactor If Necessary`,
      },
      {
        title: "Benefits of Test-Driven Development",
        description: `Simpler design. Fewer defects. Detailed project specification. High test coverage. High code coverage. Fewer regression problems.`,
      },
      {
        title: "Behavioral-Driven Development (BDD) ",
        description: `is a testing approach derived from the TDD methodology. In BDD, tests are mainly based on systems behavior. 
        In most cases, the Given-When-Then approach is used for writing test cases.
        1) Write the Behavior - 2) Convert the Plain English Behaviors Into Scripts - 3) Implement the Behavior by Writing Production Code - 4) Refactor If Needed`,
      },
      {
        title: "Key benefits of Behavioral-Driven Development approach",
        description: `Collaboration. Fewer defects. Fewer regression problems. Comprehensive project documentation fit for multiple target audiences.
Traceability for every piece of functionality.`,
      },
      {
        title: `Acceptance Test-Driven Development (ATDD)`,
        description: `a single acceptance test is written from the user’s perspective. It mainly focuses on satisfying the functional behavior of the system. This technique attempts to answer the question – Is the code working as expected?

        Note: Acceptance Test-Driven Development is very similar to Behavioral-Driven Development. However, a key difference between them is: BDD focuses more on the behavior of the feature, whereas ATDD focuses on capturing the accurate requirements.
        This technique enhances collaboration among developers, users, and QAs with a common focus on defining the acceptance criteria. The following are some of the key practices in ATDD:
        
        Analyzing and discussing the real-world scenarios
        Deciding the acceptance criteria for those test scenarios
        Automating the acceptance test cases
        Focusing on the development of those requirement cases
        `,
      },
      {
        title: "Benefits of ATDD",
        description: `1) Requirements are very clearly analyzed without any ambiguity; 
        2) Encourages collaboration among cross-team members;
        3) The acceptance test serves as a guide for the entire development process`,
      },
    ],
  },
  {
    id: "5.2",
    title: "Different types of tests",
    group: "Testing / Unit testing",
    description:
      "(black-box, API, integration and etc., and difference between them)",
  },
  {
    id: "5.3",
    title: "Mock vs stub",
    group: "Testing / Unit testing",
    description: "difference",
  },
];
