import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var SocialSharing = /** @class */ (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return cordova(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return cordova(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return cordova(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return cordova(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return cordova(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return cordova(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return cordova(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return cordova(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return cordova(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return cordova(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return cordova(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return cordova(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return cordova(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return cordova(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return cordova(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return cordova(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    SocialSharing = __decorate([
        Injectable()
    ], SocialSharing);
    return SocialSharing;
}(IonicNativePlugin));
export { SocialSharing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NvY2lhbC1zaGFyaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXlDckMsaUNBQWlCOzs7O0lBYWxELDZCQUFLLGFBQUMsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLElBQXdCLEVBQUUsR0FBWTtJQVloRix3Q0FBZ0IsYUFBQyxPQU1oQjtJQWtCRCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFnQjdGLHVDQUFlLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0lBZ0I3RCx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFpQjlELDREQUFvQyxhQUNsQyxPQUFlLEVBQ2YsS0FBYyxFQUNkLEdBQVksRUFDWixnQkFBeUI7SUFjM0IseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7SUFnQmhELHdDQUFnQixhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsR0FBWTtJQWlCOUQsa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7SUFhMUYsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7SUFXL0Msd0NBQWdCO0lBbUJoQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7SUFtQjNCLGdDQUFRLGFBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFnQixFQUFFLEtBQWMsRUFBRSxHQUFZO0lBWXpGLCtDQUF1QixhQUFDLFlBQW9CO0lBVTVDLHdDQUFnQixhQUFDLGVBQWtDO0lBaUJuRCwrQ0FBdUIsYUFBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLGVBQWtDLEVBQUUsR0FBWTs7Ozs7O0lBaFE3RixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBMUMxQjtFQTBDbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTb2NpYWwgU2hhcmluZ1xuICogQHByZW1pZXIgc29jaWFsLXNoYXJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hhcmUgdGV4dCwgZmlsZXMsIGltYWdlcywgYW5kIGxpbmtzIHZpYSBzb2NpYWwgbmV0d29ya3MsIHNtcywgYW5kIGVtYWlsLlxuICpcbiAqIEZvciBCcm93c2VyIHVzYWdlIGNoZWNrIG91dCB0aGUgV2ViIFNoYXJlIEFQSSBkb2NzOiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4jNS13ZWItc2hhcmUtYXBpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zb2NpYWwtc2hhcmluZy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc29jaWFsU2hhcmluZzogU29jaWFsU2hhcmluZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gQ2hlY2sgaWYgc2hhcmluZyB2aWEgZW1haWwgaXMgc3VwcG9ydGVkXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuY2FuU2hhcmVWaWFFbWFpbCgpLnRoZW4oKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBwb3NzaWJsZVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBub3QgcG9zc2libGVcbiAqIH0pO1xuICpcbiAqIC8vIFNoYXJlIHZpYSBlbWFpbFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLnNoYXJlVmlhRW1haWwoJ0JvZHknLCAnU3ViamVjdCcsIFsncmVjaXBpZW50QGV4YW1wbGUub3JnJ10pLnRoZW4oKCkgPT4ge1xuICogICAvLyBTdWNjZXNzIVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBFcnJvciFcbiAqIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU29jaWFsU2hhcmluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXgtc29jaWFsc2hhcmluZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc29jaWFsc2hhcmluZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2hhcmluZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gVGhlIG1lc3NhZ2UgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUuXG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9IFRoZSBzdWJqZWN0XG4gICAqIEBwYXJhbSBmaWxlIHtzdHJpbmd8c3RyaW5nW119IFVSTChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBsb2NhbCBwYXRoKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIG9yIGJhc2U2NCBkYXRhIG9mIGFuIGltYWdlLiBPbmx5IHRoZSBmaXJzdCBmaWxlL2ltYWdlIHdpbGwgYmUgdXNlZCBvbiBXaW5kb3dzIFBob25lLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IEEgVVJMIHRvIHNoYXJlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIHNoYXJlKG1lc3NhZ2U/OiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGZpbGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3Qgb3IgYW4gZXJyb3IgbWVzc2FnZSAocmVxdWlyZXMgcGx1Z2luIHZlcnNpb24gNS4xLjArKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7b2JqZWN0fSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgbWVzc2FnZSwgc3ViamVjdCwgZmlsZXMsIHVybCBhbmQgY2hvb3NlclRpdGxlIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlV2l0aE9wdGlvbnMob3B0aW9uczoge1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHVybD86IHN0cmluZztcbiAgICBjaG9vc2VyVGl0bGU/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgYSBzcGVjaWZpYyBhcHAuXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBUd2l0dGVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhVHdpdHRlcihtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFGYWNlYm9vayhtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2sgd2l0aCBhIHBhc3RlIG1lc3NhZ2UgaGludFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGFzdGVNZXNzYWdlSGludCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rV2l0aFBhc3RlTWVzc2FnZUhpbnQoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBwYXN0ZU1lc3NhZ2VIaW50Pzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBJbnN0YWdyYW1cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhSW5zdGFncmFtKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBXaGF0c0FwcFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3RcbiAgICogQHBhcmFtIHJlY2VpdmVyIHtzdHJpbmd9IFBhc3MgcGhvbmUgbnVtYmVyIG9uIEFuZHJvaWQsIGFuZCBBZGRyZXNzYm9vayBJRCAoYWJpZCkgb24gaU9TXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ30gSW1hZ2UgdG8gc2VuZCAoZG9lcyBub3Qgd29yayBvbiBpT1NcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBMaW5rIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcFRvUmVjZWl2ZXIocmVjZWl2ZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIFNNU1xuICAgKiBAcGFyYW0gbWVzc2dlIHtzdHJpbmd9IG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ30gTnVtYmVyIG9yIG11bHRpcGxlIG51bWJlcnMgc2VwZXJhdGVkIGJ5IGNvbW1hc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVNNUyhtZXNzZ2U6IHN0cmluZywgcGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBlbWFpbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjYW5TaGFyZVZpYUVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBFbWFpbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdG8ge3N0cmluZ1tdfVxuICAgKiBAcGFyYW0gY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gYmNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGZpbGVzIHtzdHJpbmd8c3RyaW5nW119IE9wdGlvbmFsIFVSTCBvciBsb2NhbCBwYXRoIHRvIGZpbGUocykgdG8gYXR0YWNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gICAgc3VjY2Vzc0luZGV4OiA2LFxuICAgIGVycm9ySW5kZXg6IDcsXG4gIH0pXG4gIHNoYXJlVmlhRW1haWwoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nW10sXG4gICAgY2M/OiBzdHJpbmdbXSxcbiAgICBiY2M/OiBzdHJpbmdbXSxcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBBcHBOYW1lXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZGVmaW5lcyB0aGUgcG9wdXAgcG9zaXRpb24gYmVmb3JlIGNhbGwgdGhlIHNoYXJlIG1ldGhvZC5cbiAgICogQHBhcmFtIHRhcmdldEJvdW5kcyB7c3RyaW5nfSBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2V0SVBhZFBvcHVwQ29vcmRpbmF0ZXModGFyZ2V0Qm91bmRzOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNhdmUgYW4gYXJyYXkgb2YgaW1hZ2VzIHRvIHRoZSBjYW1lcmEgcm9sbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8c3RyaW5nW119IGZpbGVPckZpbGVBcnJheSBTaW5nbGUgb3IgbXVsdGlwbGUgZmlsZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55PiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzYXZlVG9QaG90b0FsYnVtKGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3Qgd2l0aCBwaG9uZSBudW1iZXIuXG4gICAqIEBwYXJhbSBwaG9uZSB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGZpbGVPckZpbGVBcnJheSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1Bob25lKHBob25lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==