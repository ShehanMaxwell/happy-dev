const vscode = require('vscode');
const path = require('path');

function activate(context) {
  const funnyMessages = [
    "'Why did the programmer go broke?' It's because he lost his domain in a bet!",
    "'Programming is like a joke:' If you have to explain it, it's probably not that good!",
    "'Why do programmers prefer dark mode?' Because light attracts bugs!",
    "'I was gonna tell you a programming joke,' but I'm afraid you wouldn't get the reference!",
    "'Why was the computer cold?' It left its Windows open!",
    "'Why did the programmer quit his job?' He didn't get arrays!",
    "'I tried to code with coffee,' but I got a Java exception!",
    "'Why did the developer go broke?' Because he spent all his cache on clothes!",
    "'Why did the programmer always carry a ladder?' To reach the higher-level programming!",
    "'Programming is easy, it's like riding a bike.' Except the bike is on fire, you're on fire, everything is on fire, and you're in hell!",
    "'Why did the programmer bring a ladder to the bar?' To reach the higher spirits!",
    "'Why did the computer show up late to the party?' It had a hard drive!",
    "'Why do programmers prefer dark chocolate?' Because they like their code to be bitter!",
    "'Why did the developer go broke? Because he lost his inheritance in the merge conflict!",
    "'Why did the programmer always carry a pencil behind his ear?' In case he had to draw some classes!",
    "'Why was the math book sad?' Because it had too many problems!",
    "'Why was the JavaScript developer sad?' Because he didn't Node how to Express himself!",
    "'Why did the programmer go broke playing poker?' He kept folding on good hands!",
    "'Why did the developer start using glasses?' Because he couldn't C# clearly!",
    "'Why did the programmer drown?' He couldn't catch the right exception!",
    "'Why did the programmer plant a tree?' Because he heard about the branches and merges!",
    "'Why did the developer go broke?' His code never made any cents!",
    "'Why don't programmers like nature?' It has too many bugs!",
    "'Why did the programmer go broke buying hardware?' He forgot to Ctrl+S his money!",
    "'Why do programmers prefer iOS development?' Because it's a stable relationship!",
    "'Why did the computer go to the doctor?' It had a virus and needed a byte!",
    "'Why did the programmer get stuck in the shower?' The instructions said: Lather, Rinse, Repeat, but he couldn't find the 'Repeat' button!",
    "'Why do programmers prefer dark rooms?' Because bugs are afraid of the light!",
    "'Why did the developer go broke at the grocery store?' He couldn't find the celery('salary')!",
    "'Why do programmers hate nature?' It has too many unhandled exceptions!",
    "'Why was the programming book sad?' It had too many tearable errors!",
    "'Why do programmers prefer Linux?' Because it's a-shell of an operating system!",
    "'Why did the developer always carry a blanket?' In case he got caught in a while loop!",
    "'Why did the programmer refuse to go outside?' The WiFi signal was weak out there!",
    "'Why did the database administrator go broke?' Too many SQL injections!",
    "'Why was the developer always sleepy?' Because he couldn't find the right framework to REST!",
    "'Why did the programmer become a chef?' Because he heard there were good arrays('a-rés') in the kitchen!",
    "'Why did the JavaScript developer get thrown out of the coffee shop?' He kept trying to 'return' the coffee!",
    "'Why do programmers prefer cats?' Because they are purrfectly aligned with the command line!",
    "'Why did the programmer go broke investing in cryptocurrency?' He didn't hash out a good plan!",
    "'Why did the developer bring a ladder to the office?' To climb the corporate ladder!",
    "'Why do programmers hate nature walks?' Too many branches!",
    "'Why was the developer always hungry?' He didn't have enough bytes for breakfast!",
    "'Why did the programmer always carry a screwdriver?' In case he had to fix a bug in the system!",
    "'Why was the computer cold?' It left its Windows open!",
    "'Why did the developer go broke buying books?' He forgot to check if they had exceptions!",
    "'Why do programmers prefer dark mode?' It helps them stay incognito!",
    "'Why did the developer go broke eating out?' Too many floating point errors in the bills!",
    "'Why do programmers hate insects?' They don't like bugs in their code!",
    "'Why did the developer go broke at the bakery?' He spent all his dough on cookies!",
    "'Why did the programmer bring a ladder to the library?' To reach the website's source code!",
    "'Why do programmers prefer space over tabs?' Because they can orbit around the code!",
    "'Why did the developer go broke at the casino?' He bet it all on a single bit!",
    "'Why do programmers prefer fruits?' Because they have a lot of cores!",
    "'Why did the developer go broke at the zoo?' He spent all his money on Python snakes!",
    "Why don't scientists trust atoms? Because they make up everything!",
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'What do you call a bear with no teeth? A gummy bear!',
    "Why don't skeletons fight each other? They don't have the guts!",
    "What's brown and sticky? A stick!",
    "I bought a new cleaning robot. It's a Roomba with a view!",
    'Why did the tomato turn red? Because it saw the salad dressing!',
    'What do you call a fake noodle? An impasta!',
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What did the big flower say to the little flower? 'Hi, bud!'",
    'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    'How do you catch a squirrel? Climb a tree and act like a nut!',
    "Why don't eggs tell jokes? Because they might crack up!",
    "What did one hat say to the other hat? 'You stay here, I'll go on ahead!'",
    'Why did the math book look sad? Because it had too many problems!',
    'I used to play piano by ear, but now I use my hands.',
    "Why don't skeletons fight each other? They don't have the guts!",
    "What's orange and sounds like a parrot? A carrot!",
    'I tried to take a picture of some fog. I mist!',
    'Why did the bicycle fall over? Because it was two-tired!',
    "What did one wall say to the other wall? 'I'll meet you at the corner!'",
    "Why don't scientists trust atoms? Because they make up everything!",
    'What do you call a snowman with a six-pack? An abdominal snowman!',
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't skeletons fight each other? They don't have the guts!",
    'What do you call a bear with no teeth? A gummy bear!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    "What's brown and sticky? A stick!",
    "Why don't scientists trust atoms? Because they make up everything!",
    'Why did the bicycle fall over? Because it was two-tired!',
    "What did one hat say to the other hat? 'You stay here, I'll go on ahead!'",
    'Why did the tomato turn red? Because it saw the salad dressing!',
    'What do you get when you cross a snowman and a vampire? Frostbite!',
    "Why don't skeletons fight each other? They don't have the guts!",
    'How do you catch a squirrel? Climb a tree and act like a nut!',
    'Why was the math book sad? Because it had too many problems!',
    'What do you call a bear with no teeth? A gummy bear!',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    "What's brown and sticky? A stick!",
    'I used to play piano by ear, but now I use my hands.',
    "Why don't eggs tell jokes? Because they might crack up!",
    'What did the grape say when it got stepped on? Nothing, it just let out a little wine!',
    'How does a penguin build its house? Igloos it together!',
    "Why don't skeletons fight each other? They don't have the guts!",
    'What do you call a fish with no eyes? Fsh!',
    "I was going to tell you a joke about pizza, but it's a little cheesy.",
    "Why don't skeletons fight each other? They don't have the guts!",
    'How do you organize a space party? You planet!',
    "What's brown and sticky? A stick!",
    "I bought shoes from a drug dealer once. I don't know what he laced them with, but I was tripping all day!",
    "Why don't scientists trust atoms? Because they make up everything!",
    // Add more funny messages here
  ];

  let panel;

  // Function to create or show the webview panel
  function createOrShowPanel() {
    if (panel) {
      panel.reveal(vscode.ViewColumn.Beside);
    } else {
      panel = vscode.window.createWebviewPanel(
        'funnyMessagePanel',
        'Funny Message',
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
        }
      );

      panel.webview.html = getWebviewContent(context);

      panel.webview.onDidReceiveMessage(
        (message) => {
          if (message.command === 'getFunnyMessage') {
            const randomIndex = Math.floor(
              Math.random() * funnyMessages.length
            );
            const randomMessage = funnyMessages[randomIndex];
            vscode.window.showInformationMessage(randomMessage);
          }
        },
        undefined,
        context.subscriptions
      );

      panel.onDidDispose(() => {
        panel = undefined;
      });
    }
  }

  // Register the command to create or show the webview panel
  context.subscriptions.push(
    vscode.commands.registerCommand('happy-dev.helloWorld', createOrShowPanel)
  );

  // Add the button to the activity bar
  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    0
  );
  item.text = '$(comment-discussion) Funny Message';
  item.command = 'happy-dev.helloWorld';
  item.show();
  context.subscriptions.push(item);
}

function getWebviewContent(context) {
  const imageUri = vscode.Uri.file(
    path.join(context.extensionPath, 'images', 'icon.png')
  ).with({ scheme: 'vscode-resource' });

  return `
        <html>
            <head>
                <style>
                    .button-icon {
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                    }
                </style>
            </head>
            <body>
            <p><span style="font-size:30px"><strong><span style="font-family:Comic Sans MS,cursive">Click the button below for a funny message !</span>&nbsp;</strong>😋</span></p>

                <h2><span style="color:#27ae60"><strong>Are you tired after a hard coding day? or need a little relax time. look no further let us cheer you up. click on the button.</strong></span></h2>
                <button style="display: block; margin: 0 auto;" onclick="getFunnyMessage()">
                    <img class="button-icon" src="${imageUri}" alt="Button Icon">
                    Get Funny Message
                </button>
                <script>
                    const vscode = acquireVsCodeApi();

                    function getFunnyMessage() {
                        vscode.postMessage({ command: 'getFunnyMessage' });
                    }
                </script>
            </body>
            <footer>
            <br>
            <br>
            <br>
            <br>
            <hr />
            <hr />
            <p><strong><span style="font-size:12px"><span style="font-family:Times New Roman,Times,serif">Happy Dev VS code plugin is developed by Shehan Maxwell.&nbsp;</span></span></strong></p>
            
            <p style="margin-left:80px">❤&nbsp;&nbsp;<u><span style="font-size:12px"><span style="font-family:Times New Roman,Times,serif">Like to support ?&nbsp;</span></span></u></p>
            
            <p>🌍 Join patreon :&nbsp;<a href="https://www.patreon.com/shehanmaxwell">patreon.com/shehanmaxwell</a></p>
            
            <p>📧 Email : <a href="mailto:shehanbbn@gmail.com">shehanbbn@gmail.com</a></p>
            
            <p>🎨 Instagram :&nbsp;<a href="https://www.instagram.com/shehan_maxwell">instagram.com/shehan_maxwell</a></p>
            
            <p>🤵 Linkedin :&nbsp;<a href="https://www.linkedin.com/in/shehan-maxwell/">linkedin.com/in/shehan-maxwell</a></p>
            
            <p>💻 Github :&nbsp;<a href="https://github.com/ShehanMaxwell">github.com/ShehanMaxwell</a></p>
            
            <p>&nbsp;</p>
            
            </footer>
        </html>
    `;
}

module.exports = {
  activate,
};
