let _Component = null;
let _root = null;
let _hooks = null;

export let render = hooks => (Component = _Component, root = _root) => {
    if (JSON.stringify(hooks) === _hooks) {
        return; // shitty memoization!
    } else {
        _hooks = JSON.stringify(hooks);
    }
    // nuke the existing rendered elements
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    const Comp = reconcile(Component, root);
    _Component = Component;
    _root = root;
    const dom = createDom(Comp);
    // mount the new ones
    root.appendChild(dom);
};

export function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object" ? child : createTextElement(child)
            )
        }
    };
}

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    };
}

// recursive
export function createDom(fiber) {
    const dom =
        fiber.type === "TEXT_ELEMENT" ?
        document.createTextNode("") :
        document.createElement(fiber.type);
    const props = fiber.props || {};
    updateDom(dom, {}, props);
    if (props.children) {
        props.children.forEach(child => {
            // recursion
            if (Array.isArray(child)) {
                child.forEach(x => {
                    dom.appendChild(createDom(x));
                });
            } else {
                dom.appendChild(createDom(child));
            }
        });
    }
    return dom;
}
const isEvent = key => key.startsWith("on");
const isProperty = key => key !== "children" && !isEvent(key);
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);

function updateDom(dom, prevProps, nextProps) {
    //Remove old or changed event listeners
    Object.keys(prevProps)
        .filter(isEvent)
        .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
        .forEach(name => {
            const eventType = name.toLowerCase().substring(2);
            dom.removeEventListener(eventType, prevProps[name]);
        });
    // Remove old properties
    Object.keys(prevProps)
        .filter(isProperty)
        .filter(isGone(prevProps, nextProps))
        .forEach(name => {
            dom[name] = "";
        });
    // Set new or changed properties
    Object.keys(nextProps)
        .filter(isProperty)
        .filter(isNew(prevProps, nextProps))
        .forEach(name => {
            dom[name] = nextProps[name];
        });
    // Add event listeners
    Object.keys(nextProps)
        .filter(isEvent)
        .filter(isNew(prevProps, nextProps))
        .forEach(name => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });
}

// recursive funciton
export function reconcile(Component, root) {
    const type = Component.type;
    if (Array.isArray(Component)) {
        return Component.map(child => reconcile(child, root));
    }
    const Comp = typeof type === "string" ? Component : type();
    if (Comp.props && Comp.props.children) {
        Comp.props.children.forEach((child, idx) => {
            if (typeof child.type !== "string") {
                // recursive call for children
                Comp.props.children[idx] = reconcile(Comp.props.children[idx], root);
            }
        });
    }
    return Comp;
}