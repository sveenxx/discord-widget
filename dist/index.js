class t{constructor(t,i){this.element=t,this.guild_id=i,this.init()}async init(){const t=`https://discord.com/api/guilds/${this.guild_id}/widget.json`,i=await async function(t){try{return await(await fetch(t)).json()}catch(t){throw new Error(t)}}(t);console.log(i)}}export{t as Widget};
//# sourceMappingURL=index.js.map
