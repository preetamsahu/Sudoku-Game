value=["false", "false", "false", "true", "true", "true", "false", "false", "false", "false", "false", "true", "false", "false", "false", "false", "false", "false", "false", "true", "false", "false", "false", "false", "true", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "true", "false", "false", "false", "false", "true", "true", "false", "false", "false", "false", "false", "false", "true", "false", "false", "true", "true", "false", "false", "false", "false", "true", "false", "false", "false", "false", "false", "true", "false", "false", "false", "true", "false", "false", "true", "false", "false", "false", "false", "false", "false", "false", "false"]
realvalue=[]
temp=[]
for i in range(81):
    if i>0 and i%9==0:
        realvalue.append(temp.copy())
        temp=[]
    temp.append(value[i])
print(realvalue)