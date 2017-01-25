//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Jamie Lacivita';
me.age = 45;
me["hair color"] = 'blond'

console.log(me)


//2. Iterate over the object to console.log the propery or key names. 

function getKeys(anObject)
{
	arr_keys = Object.keys(anObject)
	for (var i = 0; i < arr_keys.length; i++)
	{
		console.log(arr_keys[i])
	}
}

getKeys(me)
