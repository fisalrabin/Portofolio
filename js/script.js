function kirimPesan() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        alert("Nama dan Email wajib di isi!")
        return;
    }

    alert("Terimakasih " + nama + ", pesan sudah terkirim");
}