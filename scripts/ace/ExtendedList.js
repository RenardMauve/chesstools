export default class ExtendedList extends IListInstance{


	/*
	* List
	*
	*	events:
	*	click
	*	dblclick
	*	selectionchange
	*
	*	methods:
	*	addItem(text) Append a new item with the given text to the end of the list.
	*	insertItem(index, text) Insert a new item at a zero-based index in the list with the given text.
	*	setItemText(index, text) Set the item text at a zero-based index in the list.
	*	getItemText(index) Return a string of the current item text at a zero-based index in the list.
	*	removeItem(index) Delete an item at a zero-based index from the list.
	*	clear() Remove all items from the list, leaving the list empty.
	*	getSelectedIndexAt(index) Return the item index or the item text of a selected item by its index up to 
	*	getSelectedTextAt(index) selectedCount. This is usually only useful with multi-select lists.
	*
	*	properties:
	*	itemCount A read-only number representing how many items are in the list.
	*	selectedIndex Set or get a number indicating the zero-based index of the currently-selected list item.
	*	selectedCount A read-only number with the number of selected items. This is usually only useful with multi-	   *   select lists.
	*	tooltip A tooltip that appears if the user hovers the mouse over the list and waits. An empty string 		*	indicates no tooltip.
	*/
	constructor(){
		super();
	}
	
	/**
	*	items {string[]} the list of items to append to the list
	*/
	addItems(items){
		items.forEach(item=>this.addItem(item));
	}
	
	getSelectedItemText(){
		return this.getItemText(this.selectedIndex);
	}
}