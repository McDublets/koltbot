const commando =require('discord.js-commando');

class CoinFlipCommand extends commando.command
{
    constructor(client)
    {
        super(client,{
            name:'flip',
            group:'simple',
            memberName:'coinflip',
            description: 'Flips a coin'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(mathf.random() * 2);
        if (chance == 0)
        {
            message.reply("It's Heads");
        }
        else
        {
            message.reply("It's Tails");
        }
    }

}
module.exports = CoinFlipCommand