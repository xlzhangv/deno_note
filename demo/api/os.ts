
// 环境变量信息
const _env = Deno.env();
console.log(_env);
// Linux export: { HOME:'...', PWD:'...', SHELL:'...',  }

// 判断是否在 terminal 控制台中
const _tty = Deno.isTTY();
console.log(_tty);
// export: { stdin: true, stdout: true, stderr: true }
//  stdin: 是否为标准输入
//  stdout: 是否为标准输出
//  stderr: 是否为标准错误


const _pid = Deno.pid;
console.log(_pid);
// export: {number}进程ID
