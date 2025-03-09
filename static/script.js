var socket = io();

function joinRoom() {
    var username = document.getElementById("username").value;
    var room = document.getElementById("room").value;
    socket.emit("join", { username: username, room: room });
}

function leaveRoom() {
    var username = document.getElementById("username").value;
    var room = document.getElementById("room").value;
    socket.emit("leave", { username: username, room: room });
}

socket.on('message', function(msg) {
    var messages = document.getElementById('messages');
    var messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
});

function sendMessage() {
    var messageInput = document.getElementById('message').value;
    var room = document.getElementById("room").value;
    socket.emit("message", { message: messageInput, room: room });
    document.getElementById('message').value = '';
}
