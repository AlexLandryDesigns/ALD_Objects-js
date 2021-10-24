# ALD_Objects.js

Extends the way HTML objects and elements can be analyzed modified. Includes ways of checking classes and data sets.


## Functions/Prototypes/Methods Quick List:
	
**.isParentElement**( *parentTagName*, *class* )

**.hasParentElement**( *parentTagName* )
	
**.hasThisClass**( *class* )

**.addThisClass**( *class* )

**addThisClass**( *nodeObject*, *class*, *multiObjectBool* )
 
**.removeThisClass**( *class* )

**removeThisClass**( *nodeObject*, *class*, *multiObjectBool* )
 
**.replaceThisClass**( *replaceThis*, *class* )

**replaceThisClass**( *nodeObject*, *replaceThis*, *class*, *multiObjectBool* )
	 
### Parameters:
- *parentTagName* - Tag name of parent element (case insensitive)
- *class* - A class name as a string or an array of strings
- *replaceThis* - Replace this class with other classes.
- *nodeObject* - An HTML node object if multiObjectBool is not true or an array of HTML node objects if multiObjectBool is true.
- *multiObjectBool* - Sets whether or not a nodeObject is a node object or an array of node objects.
	  
	  
## Functions/Prototypes/Methods Descriptions:

### .isParentElement(*parentTagName*, *class*)

Sets the attached element node object to the next parent tag matching the parentTagName argument and/or the class argument.
			
Is like the "change directory" command in command prompts, but it only moves upward through parent elements.

Classes in parent class lists may also be searched for. The first match will return the associated parent.

If there are no matches, the return is undefined.
		
#### Parameters:
	parentTagName (required)

		The name of the parent tag to become. Always becomes the next tag that matches the name or the first match of an array of names.
		
		Type:
			String or Array of Strings
			
		Return: 
			An element node object if a match is found. 
			Undefined if a match is not found.
		
### .hasParentElement(*parentTagName*)
	
		Description:
			Checks whether the preceeding node object has the specified parent element tag.
			
			Returns true or false.
			Can check for a single parent tag name string or multiple parent tag names from an array of strings.

		Parameters:
			parentTagName (required)
			
				Description:
					A string name of a parent tag or an array of names.
					
				Type:
					string
					array of strings
		
				Return:
					Boolean	
					True if a match.
					False (default) if no match.
					
					
	.hasThisClass(class)
	
		Description:
			Checks whether the attached node object has a class or an array of classes.
			
			Default is false. Returns true when the first match is found.
		
		Parameters:
			class (required)
			
				Description:
					The class or classes to search for. As a single string or an array of strings.
					
				Type:
					String or array of strings

		Return:
			boolean
		
		
	.addThisClass(class)
	
		Description:
			Add a class string or an array of class strings to the attached node object. No return.
		
		Parameters:
			class (required)
			
				Description:
					The class string or array of class strings to add to the class name of a node object.
					
				Type:
					String or Array of Strings
		
		
	addThisClass(nodeObject, class, multiObjectBool)
	
		Description:
			Add a class string or an array of class strings to a node object or an array of node objects.
		
		Parameters:
			nodeObject (required)
			
				Description:
					A node object or an array of node objects (if multiObjectBool is true).
					
				Type:
					node object
					
					
			class (required)
			
				Description:
					The class string or array of class strings to add to the class list of the node object or node objects.
					
				Type:
					String or Array of Strings							
					
					
			multiObjectBool
			
				Description:
					Sets the expected type for nodeObject to array of node objects if true. 
					
				Type:
					Boolean

					
	.removeThisClass(class)
	
		Description:
			Remove a class from a string or classes from an array of strings from a node object.
		
		Parameters:
			class (required)
			
				Description:
					A class string or an array of class strings to remove. (contextual)
					
				Type:
					String or Array of strings.
		
		
	removeThisClass(nodeObject, class, multiObjectBool)
	
		Description:
			Remove this class string or array of class strings from a node object's class list or an array of node objects' class lists.
		
		
		Parameters:
			nodeObject (required)
			
				Description:
					Node object or array of node objects to remove classes from.
					
				Type:
					node object or array of node objects
					
		
	.replaceThisClass(replaceThis, class)
	
		Description:
			Replaces a class string or an array of class strings in a node object's class list.
			
			Removes any matched classes that are to be replaced.
			Only if removal occurs, the class string or array of class strings are added to the class list of the node object.
			
		Parameters:
			replaceThis (required)
			
				Description:
					A class string or array of class strings to be replaced. Any matches are removed from the class list.
					
				Type:
					String or array of strings
		
		
	replaceThisClass(nodeObject, replaceThis, class, multiObjectBool)
	
		Description:
			Replaces a class string or an array of class strings with a new class string or a new array of class strings in the class name of a node object or an array of node objects.
		
		Parameters:
			nodeObject (required)
			
				Description:
					A node object to replace classes for if multiObjectBool is not true, or an array of node objects if multiObjectBool is true.
					
				Type:
					node object or array of node objects
	
	
