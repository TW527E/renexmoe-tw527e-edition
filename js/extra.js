function sha1loginpass(t) {
  if (t.password1.value == "") return !1;
  try {
    return (
      (timestamp = new Date().getTime() + ""),
      (timestamp = timestamp.substr(0, timestamp.length - 3)),
      (t.timestamp.value = timestamp),
      (t.password1.value = sha1(timestamp + "" + t.password1.value)),
      !0
    );
  } catch {
    return alert("sha1.js not loaded."), !1;
  }
}