const socket = io();


socket.on("admin_list_all_users", (connections) => {

  document.getElementByID("list_users").innerHTML = "";

  let template = document.getElementByID("template").innerHTML;

  connections.forEach(connection => {

    const rendered = Mustache.render(template, {
      email: connection.user.email,
      id: connection.socket_id
    })

    document.getElementById("list_users").innerHTML += rendered
  })
})