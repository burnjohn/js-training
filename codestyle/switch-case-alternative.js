// Example

switch (employee.type) {
  case "manager":
    data.portfolio = employee.getMBAProjects();
    break;
  case "developer":
    data.githubLink = employee.getGithubLink();
    break;
  default:
    data = 'Some data'
}

// Alternative

const MANAGER = 'manager';
const DEVELOPER = 'developer';

const getProjects = (type) => {

  const variants = {
    [MANAGER]: () => employee.getMBAProjects(),
    [DEVELOPER]: () => employee.getGithubLink(),
    default: () => employee.getMBAProjects(),
  };

  const action = variants[type] || variants.default;

  return action();
};

getProjects();