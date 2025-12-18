let currentRoomId;

function openJoin() {
    document.getElementById('joinModal').style.display = 'flex';
}

function copyRoomId() {
    navigator.clipboard.writeText(currentRoomId);
}

// close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

async function openCreate() {
    const res = await fetch('/create-room', { method: 'POST' });
    const data = await res.json();
    currentRoomId = data.roomId;
    document.getElementById('roomIdDisplay').value = data.roomId;
    document.getElementById('createModal').style.display = 'flex';
}


function enterRoom() {
    window.location.href = `/${currentRoomId}`;
}

function joinRoom() {
    const roomId = document.getElementById('joinRoomInput').value.trim();
    if (!roomId) return alert("Enter a room ID");
    window.location.href = `/${roomId}`;
}