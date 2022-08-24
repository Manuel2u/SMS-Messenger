<h1>Send SMS messages to anyone at a Low cost using Wittyflow API</h1>

<h4>Usage</h4>

<p>Go to <a href= "https://wittyflow.com/">Wittyflow</a>, signUp to get your own personal account</P>
<p>After Creating your account go to your accounts dashboard and click on add sendername, after adding sendernames it might take a while for it to be approved</P>
<p>Then you can recharge your balance with Mobilemoney or Credit Card. <em>NB:The lowest you can recharge is GHS 10.00</em></p>
<p>After you head over to the developers tab on the left side of the dashboard page</p>
<P>Press the create App button and give your app a name and a description.This will create an app for you and give you an app_id and app_secret.</P>
<p><em>The app_id and app_secret are not to be shared</em></p>
<p>When you succesfully go through all this process, follow the following:</p>
<ol>
  <li><p>Clone and the repository</p></li>
  <li><p>run npm install</p></li>
  <li><p>Use your app_id and app_secret in the code.</p></li>
  <li><p>The "from" in the code is going to be your approved sendername.</p></li>
  <li><p>The "to" in the code is the person you want to send the message to and it should be in the format 233241489576</p></li>
  <li><p>The "message" variable is where you put the messgage you want to send to your receipient.</p></li>
</ol>

<h3><p>If everything is succesful, when you run the app.js file you should see the STATUS CODE: 202  in your console.</p></h3>
