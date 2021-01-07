var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SocialSharingOriginal = /** @class */ (function (_super) {
    __extends(SocialSharingOriginal, _super);
    function SocialSharingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharingOriginal.prototype.close = function () { return cordova(this, "close", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.share = function (message, subject, file, url) { return cordova(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharingOriginal.prototype.shareWithOptions = function (options) { return cordova(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.canShareVia = function (appName, message, subject, image, url) { return cordova(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaTwitter = function (message, image, url) { return cordova(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaFacebook = function (message, image, url) { return cordova(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return cordova(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaInstagram = function (message, image) { return cordova(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaWhatsApp = function (message, image, url) { return cordova(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return cordova(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaSMS = function (messge, phoneNumber) { return cordova(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.canShareViaEmail = function () { return cordova(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return cordova(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharingOriginal.prototype.shareVia = function (appName, message, subject, image, url) { return cordova(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.prototype.setIPadPopupCoordinates = function (targetBounds) { return cordova(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharingOriginal.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return cordova(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharingOriginal.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return cordova(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharingOriginal.pluginName = "SocialSharing";
    SocialSharingOriginal.plugin = "cordova-plugin-x-socialsharing";
    SocialSharingOriginal.pluginRef = "plugins.socialsharing";
    SocialSharingOriginal.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharingOriginal.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    return SocialSharingOriginal;
}(IonicNativePlugin));
var SocialSharing = new SocialSharingOriginal();
export { SocialSharing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDckMsaUNBQWlCOzs7O0lBUWxELDZCQUFLO0lBZ0JMLDZCQUFLLGFBQUMsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLElBQXdCLEVBQUUsR0FBWTtJQVloRix3Q0FBZ0IsYUFBQyxPQU1oQjtJQWtCRCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFnQjdGLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFpQjlELDREQUFvQyxhQUNsQyxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVksRUFDWixnQkFBeUI7SUFjM0IseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7SUFnQmhELHdDQUFnQixhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsR0FBWTtJQWlCOUQsa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFhMUYsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7SUFXL0Msd0NBQWdCO0lBbUJoQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7SUFtQjNCLGdDQUFRLGFBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFnQixFQUFFLEtBQWMsRUFBRSxHQUFZO0lBWXpGLCtDQUF1QixhQUFDLFlBQW9CO0lBVTVDLHdDQUFnQixhQUFDLGVBQWtDO0lBaUJuRCwrQ0FBdUIsYUFBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLGVBQWtDLEVBQUUsR0FBWTs7Ozs7O3dCQXJUMUc7RUEwQ21DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU29jaWFsIFNoYXJpbmdcbiAqIEBwcmVtaWVyIHNvY2lhbC1zaGFyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNoYXJlIHRleHQsIGZpbGVzLCBpbWFnZXMsIGFuZCBsaW5rcyB2aWEgc29jaWFsIG5ldHdvcmtzLCBzbXMsIGFuZCBlbWFpbC5cbiAqXG4gKiBGb3IgQnJvd3NlciB1c2FnZSBjaGVjayBvdXQgdGhlIFdlYiBTaGFyZSBBUEkgZG9jczogaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NvY2lhbFNoYXJpbmctUGhvbmVHYXAtUGx1Z2luIzUtd2ViLXNoYXJlLWFwaVxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU29jaWFsU2hhcmluZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc29jaWFsLXNoYXJpbmcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNvY2lhbFNoYXJpbmc6IFNvY2lhbFNoYXJpbmcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIENoZWNrIGlmIHNoYXJpbmcgdmlhIGVtYWlsIGlzIHN1cHBvcnRlZFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLmNhblNoYXJlVmlhRW1haWwoKS50aGVuKCgpID0+IHtcbiAqICAgLy8gU2hhcmluZyB2aWEgZW1haWwgaXMgcG9zc2libGVcbiAqIH0pLmNhdGNoKCgpID0+IHtcbiAqICAgLy8gU2hhcmluZyB2aWEgZW1haWwgaXMgbm90IHBvc3NpYmxlXG4gKiB9KTtcbiAqXG4gKiAvLyBTaGFyZSB2aWEgZW1haWxcbiAqIHRoaXMuc29jaWFsU2hhcmluZy5zaGFyZVZpYUVtYWlsKCdCb2R5JywgJ1N1YmplY3QnLCBbJ3JlY2lwaWVudEBleGFtcGxlLm9yZyddKS50aGVuKCgpID0+IHtcbiAqICAgLy8gU3VjY2VzcyFcbiAqIH0pLmNhdGNoKCgpID0+IHtcbiAqICAgLy8gRXJyb3IhXG4gKiB9KTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NvY2lhbFNoYXJpbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi14LXNvY2lhbHNoYXJpbmcnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLnNvY2lhbHNoYXJpbmcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL1NvY2lhbFNoYXJpbmctUGhvbmVHYXAtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvY2lhbFNoYXJpbmcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBjbG9zZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdXNpbmcgdGhlIHNoYXJlIHNoZWV0XG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IFRoZSBtZXNzYWdlIHlvdSB3b3VsZCBsaWtlIHRvIHNoYXJlLlxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfSBUaGUgc3ViamVjdFxuICAgKiBAcGFyYW0gZmlsZSB7c3RyaW5nfHN0cmluZ1tdfSBVUkwocykgdG8gZmlsZShzKSBvciBpbWFnZShzKSwgbG9jYWwgcGF0aChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBvciBiYXNlNjQgZGF0YSBvZiBhbiBpbWFnZS4gT25seSB0aGUgZmlyc3QgZmlsZS9pbWFnZSB3aWxsIGJlIHVzZWQgb24gV2luZG93cyBQaG9uZS5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBBIFVSTCB0byBzaGFyZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICB9KVxuICBzaGFyZShtZXNzYWdlPzogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBmaWxlPzogc3RyaW5nIHwgc3RyaW5nW10sIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXQgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnMgYW5kIHJldHVybnMgYSByZXN1bHQgb2JqZWN0IG9yIGFuIGVycm9yIG1lc3NhZ2UgKHJlcXVpcmVzIHBsdWdpbiB2ZXJzaW9uIDUuMS4wKylcbiAgICogQHBhcmFtIG9wdGlvbnMge29iamVjdH0gVGhlIG9wdGlvbnMgb2JqZWN0IHdpdGggdGhlIG1lc3NhZ2UsIHN1YmplY3QsIGZpbGVzLCB1cmwgYW5kIGNob29zZXJUaXRsZSBwcm9wZXJ0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVdpdGhPcHRpb25zKG9wdGlvbnM6IHtcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIHN1YmplY3Q/OiBzdHJpbmc7XG4gICAgZmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgY2hvb3NlclRpdGxlPzogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGEgc3BlY2lmaWMgYXBwLlxuICAgKiBAcGFyYW0gYXBwTmFtZSB7c3RyaW5nfSBBcHAgbmFtZSBvciBwYWNrYWdlIG5hbWUuIEV4YW1wbGVzOiBpbnN0YWdyYW0gb3IgY29tLmFwcGxlLnNvY2lhbC5mYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNSxcbiAgICBlcnJvckluZGV4OiA2LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjYW5TaGFyZVZpYShhcHBOYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gVHdpdHRlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVR3aXR0ZXIobWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2sobWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEZhY2Vib29rIHdpdGggYSBwYXN0ZSBtZXNzYWdlIGhpbnRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHBhcmFtIHBhc3RlTWVzc2FnZUhpbnQge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFGYWNlYm9va1dpdGhQYXN0ZU1lc3NhZ2VIaW50KFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB1cmw/OiBzdHJpbmcsXG4gICAgcGFzdGVNZXNzYWdlSGludD86IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gSW5zdGFncmFtXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUluc3RhZ3JhbShtZXNzYWdlOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gV2hhdHNBcHBcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcChtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gYSBXaGF0c0FwcCBDb250YWN0XG4gICAqIEBwYXJhbSByZWNlaXZlciB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlciBvbiBBbmRyb2lkLCBhbmQgQWRkcmVzc2Jvb2sgSUQgKGFiaWQpIG9uIGlPU1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9IEltYWdlIHRvIHNlbmQgKGRvZXMgbm90IHdvcmsgb24gaU9TXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1JlY2VpdmVyKHJlY2VpdmVyOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBTTVNcbiAgICogQHBhcmFtIG1lc3NnZSB7c3RyaW5nfSBtZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIHBob25lTnVtYmVyIHtzdHJpbmd9IE51bWJlciBvciBtdWx0aXBsZSBudW1iZXJzIHNlcGVyYXRlZCBieSBjb21tYXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFTTVMobWVzc2dlOiBzdHJpbmcsIHBob25lTnVtYmVyOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgZW1haWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgY2FuU2hhcmVWaWFFbWFpbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgRW1haWxcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIHRvIHtzdHJpbmdbXX1cbiAgICogQHBhcmFtIGNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGJjYyB7c3RyaW5nW119IE9wdGlvbmFsXG4gICAqIEBwYXJhbSBmaWxlcyB7c3RyaW5nfHN0cmluZ1tdfSBPcHRpb25hbCBVUkwgb3IgbG9jYWwgcGF0aCB0byBmaWxlKHMpIHRvIGF0dGFjaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICAgIHN1Y2Nlc3NJbmRleDogNixcbiAgICBlcnJvckluZGV4OiA3LFxuICB9KVxuICBzaGFyZVZpYUVtYWlsKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzdWJqZWN0OiBzdHJpbmcsXG4gICAgdG86IHN0cmluZ1tdLFxuICAgIGNjPzogc3RyaW5nW10sXG4gICAgYmNjPzogc3RyaW5nW10sXG4gICAgZmlsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgQXBwTmFtZVxuICAgKiBAcGFyYW0gYXBwTmFtZSB7c3RyaW5nfSBBcHAgbmFtZSBvciBwYWNrYWdlIG5hbWUuIEV4YW1wbGVzOiBpbnN0YWdyYW0gb3IgY29tLmFwcGxlLnNvY2lhbC5mYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNSxcbiAgICBlcnJvckluZGV4OiA2LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYShhcHBOYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlZmluZXMgdGhlIHBvcHVwIHBvc2l0aW9uIGJlZm9yZSBjYWxsIHRoZSBzaGFyZSBtZXRob2QuXG4gICAqIEBwYXJhbSB0YXJnZXRCb3VuZHMge3N0cmluZ30gbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNldElQYWRQb3B1cENvb3JkaW5hdGVzKHRhcmdldEJvdW5kczogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTYXZlIGFuIGFycmF5IG9mIGltYWdlcyB0byB0aGUgY2FtZXJhIHJvbGxcbiAgICogQHBhcmFtICB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT4gfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2F2ZVRvUGhvdG9BbGJ1bShmaWxlT3JGaWxlQXJyYXk6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gYSBXaGF0c0FwcCBDb250YWN0IHdpdGggcGhvbmUgbnVtYmVyLlxuICAgKiBAcGFyYW0gcGhvbmUge3N0cmluZ30gUGFzcyBwaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBmaWxlT3JGaWxlQXJyYXkgZmlsZU9yRmlsZUFycmF5IFNpbmdsZSBvciBtdWx0aXBsZSBmaWxlc1xuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IExpbmsgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNSxcbiAgICBlcnJvckluZGV4OiA2LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwVG9QaG9uZShwaG9uZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10sIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=