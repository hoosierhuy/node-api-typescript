import { Request, Response } from 'express';

import { ContactController } from '../controllers/crmController';

export class CrmRoutes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET get bacon successful.'
                });
            });

        // Create a new contact
        app.route('/contact')
            .post(this.contactController.addNewContact);

        // Get all contacts
        app.route('/contact')
            .get(this.contactController.getContacts);

        // Get contact by ID
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID);

        // Update contact by ID
        app.route('/contact/:contactId')
            .put(this.contactController.updateContact);

        // Delete contact by ID
        app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact);
    }
}