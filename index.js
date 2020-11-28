require('./prototypes/Array')

const client = new (require('./structures/Client'))({ disableMentions: 'none' });

client.run('754155143204962404', '.');
