/*
	Author: Alex Landry, Date: 10/18/2021

	.isParentElement(parentTag)
	.hasParentElement(parentTag)
	
	
	.hasThisClass(class)
	
	.addThisClass(class)
	 addThisClass(element, class, multiObjectBool)
	.removeThisClass(class)
	 removeThisClass(element, class, multiObjectBool)
	.replaceThisClass(replaceThis, class)
	 replaceThisClass(element, replaceThis, class, multiObjectBool)
*/

/* || Is || */

	Object.prototype.isParentElement = function(input1,input2){
		// Arguments: parentTag, class
	
		var a = {
			target: [],
			classList:[],
			el:this,
			out:undefined,
			tag:'',
			tagClass:'',
		}
		
		// Get Target(s)
			if(input1 == undefined){}
			else if(typeof(input1) == 'string' && input1 != ''){a.target = [input1.toLowerCase()]}
			else if(typeof(input1) == 'object'){for(var i = 0;i < input1.length;i++){
				if(typeof(input1[i]) == 'string'){a.target.push(input1[i].toLowerCase())}
			}}
		
		// Get Classes
		
			if(typeof(input2) == 'string'){a.classList = [input2.toLowerCase()]}
			else if(typeof(input2) == 'object'){for(var i = 0;i < input2.length;i++){
				if(typeof(input2[i]) == 'string'){a.classList.push(input2[i].toLowerCase())}
			}}
		
		
		while(a.el.tagName != 'HTML' && a.out == undefined){ // Guardian Loop
			a.el = a.el.parentElement; // To Next Parent
			a.tag = a.el.tagName.toLowerCase(); // Get New Tag Name
			
			// || Target Match || //
				if(a.target.length > 0){
				
					var i = [0,0];
					
					for(i[0] = 0;i[0] < a.target.length;i[0]++){ // Target Match Loop
						
						if(a.tag == a.target[i[0]]){ // Target Is Matched
						
							if(a.classList.length == 0){a.out = a.el; break;} // No Class List
							else{ // Class List
							
								a.tagClass = ' '+a.el.className.toLowerCase()+' '; // Tag Class
								
								for(i[1] = 0;i[1] < a.classList.length;i[1]++){ // Class Match Loop
								
									if(a.tagClass.includes(a.classList[i[1]]) == true){a.out = a.el; break;} // Class Match
									
								} // END Class Match Loop
							}
							
						} // END Target Is Matched
						
					} // END Target Match Loop
					
					//a.out = a.el;
				}
			// || END Target Match || //
			
			// || Class Match || //
				else{
					
					a.tagClass = ' '+a.el.className.toLowerCase()+' '; // Tag Class
					
					for(var i = 0; i < a.classList.length; i++){
						
						if(a.tagClass.includes(a.classList[i]) == true){a.out = a.el; break;} // Class Match
						
					}
					
				}
			// || END Class Match || //
			
		}
		return a.out;
	}
	
/* || END Is || */

/* || Has || */

	Object.prototype.hasParentElement = function(input){
		// Arguments: parentTag
		
		if(input != undefined){
			var a = {
				target: [],
				el:this,
				out:undefined,
				tag:'',
			}
			
			// Get Target(s)
				if(typeof(input) == 'string'){a.target = [input.toLowerCase()]}
				else if(typeof(input) == 'object'){for(var i = 0;i < input.length;i++){
					if(typeof(input[i]) == 'string'){a.target.push(input[i].toLowerCase())}
				}}
				
			while(a.el.tagName != 'HTML'){
				a.el = a.el.parentElement;
				a.tag = a.el.tagName.toLowerCase();
				for(var i = 0;i < a.target.length;i++){
					if(a.tag == a.target[i]){return true}
				}
			}
			
		}
		return false;
	}
	
	Object.prototype.hasThisClass = function(input){
		// Arguments: class
		
		if(input != undefined){
			var a = {
				target:[],
				classList:''
			}
			
			// Get Target(s)
				if(typeof(input) == 'string'){if(input != ''){a.target = [' '+input.toLowerCase()+' ']}}
				else if(typeof(input) == 'object'){for(var i = 0;i < input.length;i++){
					if(typeof(input[i]) == 'string'){if(input[i] != ''){' '+a.target.push(input[i].toLowerCase()+' ')}}
				}}
				
			if(this.className != undefined && this.className != ''){
				a.classList = ' '+this.className + ' ';
				for(var i = 0; i < a.target.length; i++){if(a.classList.includes(a.target[i]) == true){return true}}
			}
		}
		return false;
	}

/* || END Has || */

/* || Add || */

	Object.prototype.addThisClass = function(input){
		// Arguments: class
		
		if(input != undefined){

			var a = {
				classList:[],
				data:this.className.toLowerCase()+' ',
			}
			

			// Get Target(s)
				if(typeof(input) == 'string'){if(input != ''){a.classList = [input.toLowerCase()+' ']}}
				else if(typeof(input) == 'object'){for(var i = 0; i < input.length; i++){
					if(typeof(input[i]) == 'string'){if(input[i]){a.classList.push(input[i].toLowerCase()+' ')}}
				}}
				
			// Loop Add
				for(var i = 0; i < a.classList.length; i++)
				{if(a.data.includes(a.classList[i]) == false){a.data += a.classList[i]}}
			
			
			this.className = a.data.trim();
		}
		
		return this.className;
	}
	
	function addThisClass(input1, input2, input3){if(input1 != undefined && input2 != undefined && typeof(input1) == 'object'){
		// Arguments: element, class, multiTargetBool
	
		var a = {
			targetList:[],
			multi:false,
		}
		
		// Get Multi-Object Processing
			if(input3 == true){a.multi = true}
		
		// Get Target List
			if(a.multi == false){a.targetList = [input1]}
			else{for(var i = 0; i < input1.length; i++){a.targetList.push(input1[i])}}
			
		// Process Targets
			for(var i = 0;i < a.targetList.length;i++){a.targetList[i].addThisClass(input2)}
	}}

/* || END Add || */

/* || Remove || */

	Object.prototype.removeThisClass = function(input){
		// Argument: class
		
		if(input != undefined){
			
			var a = {
				classList:[],
				data:' '+this.className.toLowerCase()+' ',
			}
			
			// Get Target(s)
				if(typeof(input) == 'string'){a.classList = [' '+input.toLowerCase()+' ']}
				else if(typeof(input) == 'object'){for(var i = 0; i < input.length; i++){
					if(typeof(input[i]) == 'string'){a.classList.push(' '+input[i].toLowerCase()+' ')}
				}}
				
			// Replace Loop
				for(var i = 0; i < a.classList.length; i++)
				{a.data = a.data.replace(a.classList[i],' ')}
			
			this.className = a.data.trim();
		}
		
		return this.className;
	}
	
	function removeThisClass(input1, input2, input3){if(input1 != undefined && input2 != undefined && typeof(input1) == 'object'){
		// Arguments: element, class, multiTargetBool
		
		var a = {
			targetList:[],
			multi:false,
		}
		
		// Get Multi-Object Processing
			if(input3 == true){a.multi = true}
		
		// Get Target List
			if(a.multi == false){a.targetList = [input1]}
			else{for(var i = 0; i < input1.length; i++){a.targetList.push(input1[i])}}
			
		// Process Targets
			for(var i = 0;i < a.targetList.length;i++){a.targetList[i].removeThisClass(input2)}
	}}

/* || END Remove || */

/* || Replace || */

	Object.prototype.replaceThisClass = function(input1, input2){
		// Arguments: replaceThis, class
		
		if(input1 != undefined && input2 != undefined){
		
			var a = {
				classList:[],
				data:' '+this.className.toLowerCase()+' ',
				replaceList:[],
				replacement:false,
			}
			
			// Get Arrays
				// Replace List
					if(typeof(input1) == 'string'){a.replaceList = [' '+input1.toLowerCase()+' ']}
					else if(typeof(input1) == 'object'){for(var i = 0; i < input1.length; i++){
						if(typeof(input1[i]) == 'string'){a.replaceList.push(' '+input1[i].toLowerCase()+' ')}
					}}
				// Class List
					if(typeof(input2) == 'string'){a.classList = [input2.toLowerCase()+' ']}
					else if(typeof(input2) == 'object'){for(var i = 0; i < input2.length; i++){
						if(typeof(input2[i]) == 'string'){a.classList.push(input2[i].toLowerCase()+' ')}
					}}
			
			// Removal Loop
				for(var i = 0; i < a.replaceList.length; i++)
				{if(a.data.includes(a.replaceList[i]) == true){a.data = a.data.replace(a.replaceList[i],' '); a.replacement = true}}
			
			// Addition Loop
				for(var i = 0; i < a.classList.length; i++)
				{a.data += a.classList[i]}
			
			
			this.className = a.data.trim();
		}
		
		return this.className;
	}
	
	function replaceThisClass(input1, input2, input3, input4){if(input1 != undefined && input2 != undefined && typeof(input1) == 'object'){
		// Arguments: element, replaceThis, class, multiTargetBool
	
		var a = {
			targetList:[],
			multi:false,
		}
		
		// Get Multi-Object Processing
			if(input4 == true){a.multi = true}
		
		// Get Target List
			if(a.multi == false){a.targetList = [input1]}
			else{for(var i = 0; i < input1.length; i++){a.targetList.push(input1[i])}}
			
		// Process Targets
			for(var i = 0;i < a.targetList.length;i++){a.targetList[i].replaceThisClass(input2,input3)}
	}}

/* || END Replace || */