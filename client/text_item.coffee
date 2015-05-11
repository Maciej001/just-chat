Template.textItem.helpers
    myColor: ->
        colorChoice = (@.author.charCodeAt(3) % 4)
        console.log @.author.charCodeAt(3) % 5
        switch colorChoice
            when 0 then return "color-1"
            when 1 then return "color-2"
            when 2 then return "color-3"
            else return "color-4"
