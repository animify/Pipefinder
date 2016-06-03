<!DOCTYPE html>
<html>
<head>
  <title>Pipefinder</title>
  <link href="fonts/font.css" rel="stylesheet" type="text/css">
  <link href="css/global.css" rel="stylesheet" type="text/css">
  <script src="https://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
</head>
<body>
  <div class="app">
    <h2>Quickfind Replacer</h2>
    <p>
      Convert your list of QF's into a search list link
    </p>
    <div class="fields">
      <div class="field">
        <input class="replace-val" type="text" name="name" placeholder="Character to replace">
      </div>
      <div class="field">
        <textarea id="qfval" placeholder="Quickfinds"></textarea>
      </div>
      <div class="field output">
        <a class="output-a" target="_blank"></a>
        <span id="ss" class="copy-link">Copy</span>
      </div>
      <div class="field">
        <a id="qfconvert" class="cta">Parse List</a>
      </div>
      <small class="reset-form">Reset form</small>
    </div>
  </div>
  <script src="js/run.js"></script>
</body>
</html>
