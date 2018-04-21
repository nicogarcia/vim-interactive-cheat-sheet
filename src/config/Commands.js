// thanks https://www.catswhocode.com/blog/vim-cheat-sheet-for-2016
export default [
  {
    label: "quit",
    mode: "normal",
    command: ":q",
    description: "press <Esc> key before, if you are in insert mode",
    keywords: "quit qut qti qt qti"
  },
  {
    label: "quit without saving",
    mode: "normal",
    command: ":q!",
    description: "press <Esc> key before, if you are in insert mode",
    keywords: "escape exit ext quit qut quti qt qti"
  },
  {
    label: "write and quit",
    mode: "normal",
    command: ":x",
    description: "press <Esc> key before, if you are in insert mode",
    keywords: "quit save sve exit ext qut qti qt qti"
  },
  {
    label: "insert mode.",
    description: "insert mode. Next keys typed are inserted into the file.",
    mode: "normal",
    command: "i",
    keywords: "insert write edit insrt"
  },
  {
    label: "⬅️ move left",
    mode: "normal",
    command: "h",
    keywords: "move cursor crsor left letf mve moe mvoe"
  },
  {
    label: "➡️ move right",
    mode: "normal",
    command: "l",
    keywords: "move cursor crsor riht rgith right mve moe mvoe"
  },
  {
    label: "⬆️ move up",
    mode: "normal",
    command: "k",
    keywords: "move up mve moe mvoe cursor cursr crsor"
  },
  {
    label: "⬇️ move down",
    mode: "normal",
    command: "j",
    keywords: "move down dwn mve moe mvoe cursor cursr crsor"
  },
  {
    label: "move the cursor to the end of the word",
    mode: "normal",
    command: "e",
    keywords: "move mve moe mvoe cursor cursr crsor"
  },
  {
    label: "move the cursor to the begining of the word",
    mode: "normal",
    command: "b",
    keywords: "move mve moe mvoe begining cursor cursr crsor"
  },
  {
    label: "move the cursor to the begining of the line",
    mode: "normal",
    command: "O",
    keywords: "move mve moe mvoe begining line cursor cursr crsor"
  },
  {
    label: "move the cursor to the end of the line",
    mode: "normal",
    command: "G",
    keywords: "move mve moe mvoe end line cursor cursr crsor"
  },
  {
    label: "move the cursor to the begining of the file",
    mode: "normal",
    command: "gg",
    keywords: "move mve moe mvoe begining file cursor cursr crsor"
  },
  {
    label: "move the cursor to the bottom of the screen",
    mode: "normal",
    command: "L",
    keywords: "move mve moe mvoe bottom cursor cursr crsor"
  },
  {
    label: "move cursor to line 59.",
    mode: "normal",
    command: ":59",
    keywords: "move mve moe mvoe line cursor cursr crsor"
  },
  {
    label: "move cursor to column 20.",
    mode: "normal",
    command: "20|",
    keywords: "move mve moe mvoe column cursor cursr crsor"
  },
  {
    label: "move cursor to matching parenthesis.",
    mode: "normal",
    command: "%",
    keywords: "move mve moe mvoe mathching cursor cursr crsor parenthesis"
  },
  {
    label: "Jump to function start",
    mode: "normal",
    command: "[[",
    keywords: "move mve moe mvoe function start cursor cursr crsor"
  },
  {
    label: "Jump to block start",
    mode: "normal",
    command: "[{",
    keywords: "move mve moe mvoe block start cursor cursr crsor"
  },
  {
    label: "page up",
    mode: "normal",
    command: "<Ctrl> + u",
    keywords: "page up pge up"
  },
  {
    label: "delete the current line",
    mode: "normal",
    command: "dd",
    keywords: "delete line current"
  },
  {
    label: "copy the current line",
    mode: "normal",
    command: "yy",
    keywords: "copy current line copu cpy"
  },
  {
    label: "paste",
    mode: "normal",
    command: "p",
    keywords: "paste pste psate"
  },
  {
    label: "page down",
    mode: "normal",
    command: "<Ctrl> + d",
    keywords: "page down pge down"
  },
  {
    label: "save",
    mode: "normal",
    command: ":w",
    keywords: "save saving sve"
  },
  {
    label: "Append text following current cursor position",
    mode: "normal",
    command: "a",
    keywords: "write writing writ wrt edit editing edt"
  },
  {
    label: "Append text to the end of current line",
    mode: "normal",
    keywords: "write writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "append text",
    description: "Insert text before the current cursor position",
    mode: "normal",
    keywords: "write writing writ wrt edit editing edt",
    command: "A"
  },
  {
    label: "syntax highlighting",
    description: "Turn on color syntax highlighting",
    mode: "normal",
    keywords: "syntax color sntax clor highlighting",
    command: ":syntax on"
  },
  {
    label: "Insert at new line below",
    mode: "normal",
    command: "o",
    keywords: "Insert new line below nw lne inster insert below"
  },
  {
    label: "Undo",
    mode: "normal",
    command: "u",
    keywords: "undo udo ndo udno ctrl-z ctrl z"
  },
  {
    label: "Redo",
    mode: "normal",
    command: "<Ctrl> + r",
    keywords: "redo"
  },
  {
    label: "delete character",
    mode: "normal",
    description: "Delete [count] characters under and after the cursor",
    command: "x",
    keywords: "delete delte"
  },
  {
    label: "delete character",
    mode: "normal",
    description: "Delete [count] characters before the cursor",
    command: "X",
    keywords: "dkte delete delte"
  },
  {
    label: "selecting text (characters)",
    mode: "visual",
    description: "start Visual mode per character.",
    command: "v",
    keywords: "slecting selecting selct"
  },
  {
    label: "selecting text (lines)",
    mode: "visual",
    description: "start Visual mode per line.",
    command: "V",
    keywords: "slecting selecting selct"
  },
  {
    label: "replace character",
    mode: "normal",
    description:
      "Enter insert mode, replacing characters rather than inserting",
    command: "R",
    keywords: "replace rplace replce insert insrt"
  },
  {
    label: "search and replace",
    mode: "normal",
    description: "Replace all occurences of old by new in file",
    command: ":%s/old/new/g",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace (with confirmation)",
    mode: "normal",
    description: "Replace all occurences of old by new in file",
    command: ":%s/old/new/gw",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "search and replace (case insensitive)",
    mode: "normal",
    description: "Replace all occurences of old by new in file",
    command: ":%s/old/new/gi",
    keywords: "search replace reaplce serch sarch sreach rplace"
  },
  {
    label: "indentation",
    mode: "normal",
    command: "gg=G",
    keywords: "autoindent auto-index autoindentation reindent re-indent"
  },
  {
    label: "enable line numbers",
    mode: "normal",
    command: ":set number",
    keywords: "display line numbers enable line numbers"
  },
  {
    label: "Search (top to bottom)",
    mode: "normal",
    command: "/myWord",
    description: "search word from top to bottom",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "Search (bottom to top)",
    mode: "normal",
    command: "?myWord",
    description: "search word from bottom to top",
    keywords: "/ srch earch search saerch"
  },
  {
    label: "Search",
    mode: "normal",
    command: "/myWord",
    keywords: "srch earch search saerch"
  }
];
