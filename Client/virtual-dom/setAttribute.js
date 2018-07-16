function setAttribute(dom, tagName, value) {
	if(tagName == 'className') {
		tagName = 'class'
	}
	// 判断是事件、样式、class、id
	switch(tagName) {
		case 'style':
			setStyle(dom, value);
			break;
		case 'class':
			setDOM(dom,tagName,value);
			break;
		case 'id':
			setDOM(dom,tagName,value);
			break;
		default:
			setEvent(dom,tagName,value);
	}
}

// 设置样式
function setStyle(dom, value) {
	if(!value || typeof value === 'string') {
		node.style.cssText = value || '';
	}else if ( value && typeof value === 'object' ) {
        for ( let name in value ) {
        	// 在react中可以这样写 height:20 => height:20px;
            dom.style[ name ] = typeof value[ name ] === 'number' ? value[ name ] + 'px' : value[ name ];
        }
    }
}

// 设置节点
function setDOM(dom,tagName,value) {
	if(name in dom) {
		dom[tagName] = value || '';
	}
	if(value) {
		dom.setAttribute(tagName, value);
	} else {
		dom.removeAttribute(tagName, value);
	}
}

// 设置事件
function setEvent(dom,tagName,value){
	name = name.toLowerCase();
    dom[ name ] = value || '';
}
