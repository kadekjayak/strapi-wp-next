const componentImporter = requireContext => requireContext.keys()
.map(fileName => [fileName.replace(/(^.\/)|(\.js$)/g, ''), requireContext(fileName)])
.reduce((modules, [name, module]) => {
    return { ...modules, [name]: module };
}, {});

export default componentImporter;
