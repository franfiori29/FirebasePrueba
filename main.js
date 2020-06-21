// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCLE21-sAgpVHFuB8Nr_DFcabZI5DbVoY8",
    authDomain: "levantar-13502.firebaseapp.com",
    databaseURL: "https://levantar-13502.firebaseio.com",
    projectId: "levantar-13502",
    storageBucket: "levantar-13502.appspot.com",
    messagingSenderId: "547585888231",
    appId: "1:547585888231:web:20e83f504f6602fee93742"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");

document.getElementById("form").addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();

	var nombre = getInputVal("nombre");
	var apellido = getInputVal("apellido");
	var localidad = getInputVal("localidad");
	var direccion = getInputVal("direccion");
	var mail = getInputVal("mail");
	var telefono = getInputVal("telefono");
	var mensaje = getInputVal("mensaje");

	salvarMensaje(nombre, apellido, localidad, direccion, mail, telefono, mensaje);


}

function getInputVal(id){
	return document.getElementById(id).value;
}


function salvarMensaje(nombre, apellido, localidad, direccion, mail, telefono, mensaje){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		nombre: nombre,
		apellido: apellido,
		localidad: localidad,
		direccion: direccion,
		mail: mail,
		telefono: telefono,
		mensaje: mensaje,
	});
}

function reply_click(clicked_id){
        if (confirm('¿Estás seguro de que querés tomar este pedido?')){
        	firebase.database().ref("messages").child(clicked_id).remove();
        	location.reload();
    	}
    }

(function() {
            $('form > input').keyup(function() {

                var empty = false;
                $('form > input').each(function() {
                    if ($(this).val() == '') {
                        empty = true;
                    }
                });

                if (empty) {
                    $('#submit').attr('disabled', 'disabled'); 
                } else {
                    $('#submit').removeAttr('disabled'); 
                }
            });
        })();
