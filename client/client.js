Template.textsList.helpers({
  texts: function() {
    return Texts.find({}, {submitted: -1});
  }
});

Template.input.events = {
    'keydown input#message-input': function(e){
        if (e.which == 13){
            
            var name = "Anonymous";
            var message = document.getElementById('message-input');
            
            if (message.value != ''){
                Texts.insert({
                    author: Meteor.user().username,
                    title: message.value,
                    time: Date.now(),
                });
                
                document.getElementById('message-input').value = '';
                message.value = '';
                
              
            }
            
        }
    }
}