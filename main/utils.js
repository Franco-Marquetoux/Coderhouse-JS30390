function onConfirm(message, callback) {
  const ok = confirm(message);

  if (ok) {
    callback();
  }
}
