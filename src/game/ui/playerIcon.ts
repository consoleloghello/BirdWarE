class playerIcon extends eui.Component implements  eui.UIComponent {
	public player:eui.Image;
	public userInfo = null;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private addToStage()
	{
		this.init();
	}

	public init()
	{
		this.player.visible = false;
		this.userInfo = null;
	}

	public setData(userInfo)
	{
		this.player.visible = true;
		this.userInfo = userInfo;
	}
}
 window["playerIcon"] = playerIcon  