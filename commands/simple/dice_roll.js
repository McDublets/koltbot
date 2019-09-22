const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName:'diceroll',
            description: 'Rolls a dice'
        });
    }

    async run(message, args)
    {
        var diceroll =math.floor(math.random() * 6) + 1;
        message.reply("Your dice landed on " + diceroll);
    }
}
