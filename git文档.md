```
modified 修改的 
```



## git常用命令



```
git config --global user.name 用户名
git config --global user.email 邮箱

git init                         ---初始化本地库
git status                       ---查看本地库状态
git add .                         添加所有文件到暂存区
git add 文件名                    --- 添加到暂存区 （查看状态可以看到modified 有文件被修改了）
	git rm --cached <file>       ---把暂存区的文件删了
git commit -m '日志信息' 文件名    ---提交到本地库 
git reflog                       ---查看历史记录
git log                          ---查看详细日志
git reset --hard 版本号           ---版本穿梭

git init -b dev                   初始化dev分支
```



## 分支操作

```
git branch 分支名				  ---创建分支
git branch -v					---查看分支
git branch -d 分支名             -d 删除已合并过的分支 -D强制删除分支(不管是否合并过)
git checkout 分支名			  ---切换分支
git merge 分支名                 ---把指定分支合并到当前分支
git branch -m 旧分支名称 新分支名称 ---修改分支名称
git checkout -b 创建分支并切换分支
```

> 不同的分支相当于平行世界 分支的合并实际上就是覆盖 发生冲突要手动修改 代码 然后 add commit(不能带文件名)

> 先创建分支 再修改文件 将修改的文件提交到dev中 这样切换分支的时候才能看到变化

> 合并冲突 : 当对不同分支的同一个文件修改, 把副分支合并到主分支会发生合并冲突 这是因为git不知道你要保留的是哪一部分 这时候需要主动修改发生冲突的文件 然后提交(提交不能带文件名 否则会error)

## 创建远程仓库

远程仓库名字一般和本地仓库同名



```
git remote -v             查看当前所有远程地址别名
git remote add 别名 远程地址    起别名
例子: 
git remote add webTools https://github.com/848524535/webTools.git
git push 远程库/地址别名  分支              推送本地分支上的内容到远程仓库
git clone 远程地址              (不用创建文件夹)将远程仓库的内容克隆岛本地
git pull 远程库/地址别名 远程分支名   将远程仓库对于分支最新的内容拉下来后与当前本地分支直接合并    
```









## 代码推送 push



## 代码拉取 pull









## 代码克隆 clone



## ssh免密登录



## idea集成



## gitee 码云



## gitlab