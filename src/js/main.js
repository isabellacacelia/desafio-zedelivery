const consumirAPI = async (graphqlEndpoint, query, variables = {}) => {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
};

const GRAPHQL_ENDPOINT =
  "https://api.code-challenge.ze.delivery/public/graphql";

const consultarTodosQuery = `
  query ConsultarTodos{
    todos {
      id
      title
      completed
    }
  }
  `;

consumirAPI(GRAPHQL_ENDPOINT, consultarTodosQuery).then(console.log);

const adicionarTodoMutation = `
  mutation AdicionarTodo($title: String!) {
    add(title: $title){
      id
      title
      completed
    }
  }
  `;

consumirAPI(GRAPHQL_ENDPOINT, adicionarTodoMutation, {
  title: "Estudar GraphQL",
}).then(console.log);
