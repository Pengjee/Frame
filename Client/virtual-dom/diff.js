function diff(dom, vdom, container) {

	const result = diffNode(dom, vdom);
	if(container && result.parentNode !== container) {
		container.appendChild(result);
	}

	return result;
}

// vdom 虚拟DOM
// dom 真实DOM
function diffNode(dom, vdom) {
	let returnDOM = dom; //  需要重新构建的DOM

	//  判断虚拟DOM是否存在
	if(vdom === undefined || vdom === null || typeof vdom === 'boolean') {
		vdom = ''
	}

	if(typeof vdom === 'string') {
		// 判断当前真实DOM节点是否存在，是否有内容
		if(dom && dom.nodeType === 3) {
			if(dom.textContent !== vnode) {
				dom.textContent = vnode;
			}
		} else {
			// 创建一个文本DOM，替换掉原来的DOM
			returnDOM = document.createTextNode(vdom);
			if(dom && dom.parentNode) {
				dom.parentNode.replaceChild(returnDOM, dom); // replaceChild(newnode,oldnode)
			}
		}
		return returnDOM;
	}

	// 判断虚拟DOM(vdom)与真实DOM(dom)的节点类型是否相同 nodeType
	if(!dom || !isSameNodeType(dom, vdom)) {
		returnDOM = document.createElement(vdom.tagName);
		if(dom) {
			// 将原来的子节点移到新节点下
			[...dom.childNodes].map(returnDOM.appendChild);
			if(dom.parentNode) {
				dom.parentNode.replaceChild(returnDOM, dom); // 移除掉原来的DOM对象
			}
		}
	}
	if(vdom.children && vdom.children.length > 0 || (returnDOM.childNodes && returnDOM.childNodes.length > 0)) {
		diffChildren(returnDOM, vdom.children);
	}

	diffAttributes(returnDOM, vdom);

	return returnDOM;
}

// 找到相同类型的子节点进行比较，但是在数组中，子节点类型相同，但是他们的位置可能不同，所以需要给一个key
// 标记出来，方便匹配查找
function diffChildren(returnDOM, vChildrenDOM) {
	// 获取真实节点的ChildrenDOM
	let childrenDOM = returnDOM.childNodes || [];

	//  把有key和没有key的child分开
	let children = []; // 无key
	let keylist = {}; // 有key

	if(childrenDOM.length > 0) {
		for(let i = 0; i < childrenDOM.length; i++) {
			const child = childrenDOM[i];
			const key = child.key;
			if(key) {
				keylist[key] = child;
			} else {
				children.push(child);
			}
		}
	}

	if(vChildrenDOM && vChildrenDOM.length > 0) {
		let min = 0; // 计算验证虚拟dom中是否添加了无key的子节点
		let childrenLength = children.length; // 真实dom无key的children
		for(let i = 0; i < vChildrenDOM.length; i++) {
			const vchild = vChildrenDOM[i];
			const key = vchild.key;
			let child;

			if(key) {
				if(keyed[key]) {
					child = keyed[key];
					keyed[key] = undefined;
				}
			} else if(min < childrenLength) {
				// 判断无key的子节点是否相同
				for(let j = min; j < childrenLength; j++) {
					let c = children[j];
					if(c && isSameNodeType(c, vchild)) {
						child = c;
						children[j] = undefined;
						if(j === childrenLength - 1) {
							childrenLength--;
						}
						if(j === min) {
							min++;
						}
						break;
					}

				}
			}

			// 对比真实DOM与虚拟DOM的子节点
			child = diff(child, vchild);

			// 更新DOM
			const childDOM = childrenDOM[i];
			if(child && child !== returnDOM && child !== childDOM) {
				// 如果在真实DOM中，这个节点不存在，这推入这个节点
				if(!childDOM) {
					returnDOM.appendChild(child);
				} else if(child === childDOM.nextSibling) {
					removeNode(childDOM);
				} else {
					returnDOM.insertBefore(child, childDOM);
				}
			}

		}
	}
}

function isSameNodeType(dom, vdom) {

	// 如果vdom是文本DOM
	if(typeof vdom === 'string' || typeof vdom === 'number') {
		return dom.nodeType === 3;
	}

	// 如果vdom是原生DOM
	if(typeof vdom.tagName === 'string') {
		return dom.tagName.toLowerCase() === vdom.tagName.toLowerCase();
	}

}

function diffAttributes(dom, vnode) {

	const old = {}; // 当前DOM的属性
	const attrs = vnode.attrs; // 虚拟DOM的属性
	
	
	for(let i = 0; i < dom.props.length; i++) {
		const attr = dom.attributes[i];
		old[attr.name] = attr.value;
	}
	// 如果原来的属性不在新的属性当中，则将其移除掉
	for(let name in old) {
		if(old.hasOwnProperty(name)) {
			if(!(name in attrs)) {
				setAttribute(dom, name, undefined);
			}
		}
	}
	// 更新新的属性值
	for(let name in attrs) {
		if(old.hasOwnProperty(name)) {
			if(old[name] !== attrs[name]) {
				setAttribute(dom, name, attrs[name]);
			}
		}
	}
}

function removeNode( dom ) {
    if ( dom && dom.parentNode ) {
        dom.parentNode.removeChild( dom );
    }

}