# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful Components: implement logic.
Functional: render UI (display data). Also known as Stateless Components.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

Before the component is rendered. Note: Calling setState re-renders. Calling it in componentWillMount won't, because then setState is called before the first render happened.

3. Define stateful logic.

(Any) Code using states.

4. What are the three step of creating a successful test? What is done in each phase?

AAA: Arrange-Act-Assert (Targets, behaviour, expectations).
I.e. grab/fetch what we need,
     make it do something,
     check if it did the something correctly